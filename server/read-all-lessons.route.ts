import { Request, Response } from "express";
import {db} from "./database";
import { sessionStore } from "./session-store";


export function readAllLessons(req: Request, res: Response) {

    /* Example of Session Storage */
    // const sessionID = req.cookies['SESSIONID'];
    // const isSessionValid = sessionStore.isSessionValid(sessionID);

    res.status(200).json({ lessons:db.readAllLessons() });
}