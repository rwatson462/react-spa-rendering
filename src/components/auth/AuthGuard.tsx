import {useAuth} from "./useAuth.ts";
import {PropsWithChildren, ReactNode} from "react";

export function AuthGuard({unauthenticatedView, children}: PropsWithChildren<{unauthenticatedView: ReactNode}>) {
  const { isLoggedIn } = useAuth()

  if (!isLoggedIn) {
    return unauthenticatedView
  }

  return children
}