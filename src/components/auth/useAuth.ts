import {useContext} from "react";
import {authContext} from "./authContext.ts";

export function useAuth() {
  const context = useContext(authContext)

  if (context === undefined) {
    throw new Error('Auth Context used outside of provider')
  }

  return context
}