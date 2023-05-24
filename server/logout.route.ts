

import {Request, Response} from 'express';
import { sessionStore } from './session-store';



export function logout(req: Request, res: Response) {
    const sessionID = req.cookies['SESSIONID'];
    sessionStore.destroySession(sessionID);

    res.clearCookie("SESSIONID");
    


    // res.clearCookie("XSRF-TOKEN");

    res.status(200).json({ message: 'Logout Successful' });
}
