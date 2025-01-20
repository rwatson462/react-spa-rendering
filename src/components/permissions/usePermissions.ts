import {useContext} from "react";
import {permissionsContext} from "./permissionsContext.ts";

export function usePermissions() {
  const context = useContext(permissionsContext);

  if (context === undefined) {
    throw new Error('usePermissions must be used within the context');
  }

  return context;
}
