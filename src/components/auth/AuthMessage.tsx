import {useAuth} from "./useAuth.ts";

export function AuthMessage() {
  const { isLoggedIn, getUser } = useAuth()

  const user = isLoggedIn ? getUser() : undefined

  return user ? (
    <p className={'border-b border-sky-500 p-2 bg-sky-200'}>Logged in as {user.email}</p>
  ) : (
    <p className={'border-b border-sky-500 p-2 bg-sky-200'}>Not logged in</p>
  )
}
