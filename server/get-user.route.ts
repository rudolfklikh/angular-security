

import {Request, Response} from "express";
import {db} from "./database";
import { sessionStore } from "./session-store";



export function getUser(req:Request, res:Response) {

    const sessionID = req.cookies['SESSIONID'];

    const user = sessionStore.findUserBySessionID(sessionID);

    if (user) {
        res.status(200).json({email:user.email, id:user.id, roles: user.roles});
    }
    else {
        res.sendStatus(204);
    }
}
