import { Moment } from "moment";
import { User } from "../src/app/model/user";
import moment = require("moment");

export class Session {
    private validUntil: Moment;
    static readonly VALIDITY_MINUTES = 2;

    constructor(public sessionID: string, public user: User) {
        this.validUntil = moment().add(Session.VALIDITY_MINUTES, 'minutes');
    }

    isValid() {
        return moment().diff(this.validUntil, 'minutes') <= 0;
    }
}