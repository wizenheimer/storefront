import UserModel, { UserDocument, UserInput } from "../model/user.model";
import { omit } from "lodash";

export async function createUser(input: UserInput) {
    try {
        const user = await UserModel.create(input);
        return omit(user.toJSON(), "password")
    } catch (err: any) {
        throw new Error(err);
    }
}