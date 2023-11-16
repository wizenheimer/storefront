import SessionModel from "../model/session.model";

export async function createSession(userId: string, userAgent: string) {
    const session = await SessionModel.create({
        user: userId,
        userAgent: userAgent
    });
    return session.toJSON();
}