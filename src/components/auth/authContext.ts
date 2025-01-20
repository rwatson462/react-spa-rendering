import {createContext} from "react";
import {User} from "../../lib/types";

interface AuthContext {
  login: (user: User) => void
  logout: () => void
  isLoggedIn: boolean
  getUser: () => User
}

export const authContext = createContext(undefined as unknown as AuthContext)