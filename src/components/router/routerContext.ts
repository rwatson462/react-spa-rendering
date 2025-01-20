import {createContext} from "react";
import {routes} from "../../data/routes.ts";

interface RouterContext {
  navigateTo: (route: typeof routes[number]['path']) => void
}

export const routerContext = createContext(undefined as unknown as RouterContext)