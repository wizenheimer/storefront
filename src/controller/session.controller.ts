import { Request, Response } from "express";
import { validatePassword } from "../service/user.service";
import { createSession } from "../service/session.service";
import { signJWT } from "../utils/jwt.utils";
import config from "config";

export async function createUserSessionHandler(req: Request, res: Response) {
    // TODO: validate user password
    const user = await validatePassword(req.body);
    if (!user) {
        return res.status(401).send("Invalid Email or Password.");
    }

    // TODO: create session
    const session = createSession(user._id, req.get("user-agent") || "")

    // TODO: create access token
    const accessToken = signJWT(
        { ...user, session: (await session)._id, },
        { expiresIn: config.get<string>("accessTokenTTL") }
    )

    // TODO: create refresh token

    const refreshToken = signJWT(
        { ...user, session: (await session)._id, },
        { expiresIn: config.get<string>("accessTokenTTL") }
    )
    // TODO: return access and refresh token
    return res.send({
        accessToken: accessToken,
        refreshToken: refreshToken,
    })
}