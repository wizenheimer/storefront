import { FilterQuery } from "mongoose";
import SessionModel, { sessionDocument } from "../model/session.model";

export async function createSession(userId: string, userAgent: string) {
    const session = await SessionModel.create({
        user: userId,
        userAgent: userAgent
    });
    return session.toJSON();
}


export async function findSessions(query: FilterQuery<sessionDocument>) {
    return SessionModel.find(query).lean();
}