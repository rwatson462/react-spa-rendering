import {PropsWithChildren} from "react";
import {AuthGuard} from "../auth/AuthGuard.tsx";
import {LogInPage} from "../../pages/LogInPage.tsx";

export function AuthenticatedLayout({children}: PropsWithChildren) {
  return (
    <AuthGuard unauthenticatedView={<LogInPage/>}>
      {children}
    </AuthGuard>
  )
}