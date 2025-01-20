import {createContext} from "react";

interface PermissionsContext {
  hasPermission: (permission: string) => boolean
}

export const permissionsContext = createContext(undefined as unknown as PermissionsContext);
