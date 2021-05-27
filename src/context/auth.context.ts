import { createContext, Context, Dispatch } from "react";
import { AuthAction, IAuthState } from "./auth.reducer";

export interface IAuth {
  authState: IAuthState;
  dispatchAuth: Dispatch<AuthAction>;
}

export const AuthContext = createContext<IAuth | null>(null) as Context<IAuth>;
