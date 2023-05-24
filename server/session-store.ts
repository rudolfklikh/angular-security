
import { User } from "../src/app/model/user";
import { Session } from "./session";

class SessionStore {
  private sessions: { [key: string]: Session } = {};

  createSession(sessionID: string, user: User) {
    this.sessions[sessionID] = new Session(sessionID, user);
  }

  findUserBySessionID(sessionID: string): User | undefined {
    const session = this.getSessionBySessionID(sessionID);
    return this.isSessionValid(sessionID) ? session.user : undefined;
  }

  isSessionValid(sessionID: string): boolean {
    const session = this.getSessionBySessionID(sessionID)
    return session && session.isValid();
  }

  destroySession(sessionID: string): void {
    delete this.sessions[sessionID];
  }

  private getSessionBySessionID(sessionID: string): Session | undefined {
    return this.sessions[sessionID];
  }
}


export const sessionStore = new SessionStore();