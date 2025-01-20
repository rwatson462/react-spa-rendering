import {useContext} from "react";
import {routerContext} from "./routerContext.ts";

export function useRouter() {
  const context = useContext(routerContext)

  if (context === undefined) {
    throw new Error('Router context used outside of provider')
  }

  return context
}