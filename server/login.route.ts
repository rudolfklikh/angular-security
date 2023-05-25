import { Request, Response } from "express";
import { db } from "./database";
import * as argon2 from "argon2";
import { DbUser } from "./db-user";
import {
  createCsrfToken,
  createSessionToken,
  randomBytes,
} from "./security.utils";
import { sessionStore } from "./session-store";

export function login(req: Request, res: Response) {
  const credentials = req.body;

  const user = db.findUserByEmail(credentials.email);

  if (!user) {
    res.sendStatus(403);
  } else {
    loginAndBuildResponse(credentials, user, res);
  }
}

async function loginAndBuildResponse(
  credentials: any,
  user: DbUser,
  res: Response
) {
  try {
    const sessionID = await attemptLogin(credentials, user);
    
    res.cookie("SESSIONID", sessionID, { httpOnly: true, secure: true });
    res.status(200).json({ id: user.id, email: user.email, roles: user.roles });
  } catch (err) {
    res.sendStatus(403);
  }
}

async function attemptLogin(credentials: any, user: DbUser) {
  const isPasswordValid = await argon2.verify(
    user.passwordDigest,
    credentials.password
  );

  if (!isPasswordValid) {
    throw new Error("Password Invalid ");
  }

  /* Example of Session Management */
  // const sessionID = await randomBytes(32).then((bytes) =>
  //   bytes.toString("hex")
  // );
  // sessionStore.createSession(sessionID, user);

  return createSessionToken(user.id.toString());
}
