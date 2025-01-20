import {PropsWithChildren, useState} from "react";
import {User} from "../../lib/types";
import { authContext } from "./authContext";

function getUserFromSessionStorage(): User|undefined {
  const storedUser = sessionStorage.getItem("user");
  return storedUser ? JSON.parse(storedUser) : undefined
}

function setUserInSessionStorage(user?: User) {
  sessionStorage.setItem("user", JSON.stringify(user));
}


export function AuthProvider({children}: PropsWithChildren) {
  const [user, setUser] = useState<User | undefined>(getUserFromSessionStorage());

  function login(user: User) {
    setUserInSessionStorage(user);
    setUser(user)
  }

  function logout() {
    setUserInSessionStorage(undefined)
    setUser(undefined)
  }

  function getUser() {
    if (user === undefined) {
      throw new Error('Cannot access User when not logged in')
    }

    return user
  }

  const isLoggedIn = user !== undefined

  return (
    <authContext.Provider value={{getUser, login, logout, isLoggedIn}}>
      {children}
    </authContext.Provider>
  )
}
