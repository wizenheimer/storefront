import mongoose from "mongoose";
import { UserDocument } from "./user.model";

// interface for session input
export interface sessionInput {
    user: UserDocument['_id'];
    valid: boolean;
}

// interface for session document
// extends and adds autogen fields
export interface sessionDocument extends sessionInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
}

// schema for holding sessions
const sessionSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    valid: { type: Boolean, default: true },
    userAgent: { type: String },
}, {
    timestamps: true,
});

const SessionModel = mongoose.model("Session", sessionSchema);

export default SessionModel;