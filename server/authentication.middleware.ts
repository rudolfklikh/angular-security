import {Request, Response, NextFunction} from 'express';


export function checkIfAuthenticated(req: Request, res: Response, next: NextFunction) {

    if (req['userID']) {
        next();
    }
    else {
        res.sendStatus(403);
    }


}


