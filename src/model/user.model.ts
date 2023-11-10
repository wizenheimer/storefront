import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface UserInput {
    email: string;
    name: string;
    password: string;
}

// interface for User Document
export interface UserDocument extends UserInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<boolean>;
}

// schema for mongoose
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
}, {
    timestamps: true,
});

// incase password is modified
// pre save hook updates password hash 
userSchema.pre("save", async function (next) {
    let user = this as UserDocument

    if (!user.isModified('password')) {
        return next();
    }

    const saltWorkFactor = config.get<number>("saltWorkFactor");
    const salt = await bcrypt.genSalt(saltWorkFactor);

    const hash = await bcrypt.hashSync(user.password, salt);
    user.password = hash;

    return next();
});

// compare passwords hash
userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
    const user = this as UserDocument;
    try {
        await bcrypt.compare(candidatePassword, user.password);
        return true;
    } catch (err) {
        return false;
    }
}

// setup model from schema
const UserModel = mongoose.model("User", userSchema);

export default UserModel;