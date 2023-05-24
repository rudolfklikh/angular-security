import { Request, Response } from "express";
import {db} from "./database";
import { sessionStore } from "./session-store";


export function readAllLessons(req: Request, res: Response) {
    const sessionID = req.cookies['SESSIONID'];
    const isSessionValid = sessionStore.isSessionValid(sessionID);


    if (!isSessionValid) {
        res.sendStatus(403);
    } else {
        res.status(200).json({ lessons:db.readAllLessons() });
    }
}