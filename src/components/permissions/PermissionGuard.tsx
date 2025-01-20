import {PropsWithChildren, ReactNode} from "react";
import {usePermissions} from "./usePermissions.ts";
import {permissions} from "../../data/permissions.ts";
import {PermissionsMessage} from "./PermissionsMessage.tsx";

export function PermissionGuard({permission, accessDeniedView, children}: PropsWithChildren<{permission: typeof permissions[number]['name'], accessDeniedView: ReactNode}>) {
  const { hasPermission } = usePermissions()

  const canAccess = hasPermission(permission)

  if (!canAccess) {
    return accessDeniedView
  }

  return (
    <>
      <PermissionsMessage permission={permission}/>
      {children}
    </>
  )
}
