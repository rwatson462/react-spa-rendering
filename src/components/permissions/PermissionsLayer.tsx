import {PropsWithChildren} from "react";
import {useAuth} from "../auth/useAuth.ts";
import {PermissionsProvider} from "./PermissionsProvider.tsx";
import {findPermissionsForUser} from "../../lib/queries/findPermissionsForUser.ts";

export function PermissionsLayer({children}: PropsWithChildren) {
  // permissions layer requires an authenticated user
  const { getUser } = useAuth()

  const user = getUser()
  const permissions = findPermissionsForUser(user)

  return (
    <PermissionsProvider permissions={permissions}>
      {children}
    </PermissionsProvider>
  )
}
