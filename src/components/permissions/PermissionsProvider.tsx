import {PropsWithChildren} from "react";
import { permissionsContext } from "./permissionsContext";
import {Permission} from "../../lib/types";

export function PermissionsProvider({permissions, children}: PropsWithChildren<{permissions: Permission[]}>) {
  function hasPermission(permission: string) {
    return permissions.some(perm => perm.name === permission)
  }

  const value = {
    hasPermission
  }

  return (
    <permissionsContext.Provider value={value}>
      {children}
    </permissionsContext.Provider>
  )
}