import {ReactNode, useEffect, useState} from "react";
import {Route} from "../../lib/types";
import {routes} from "../../data/routes.ts";
import {routerContext} from "./routerContext.ts";

function findRouteForPath(path: string) {
  return routes.find((route) => route.path === path);
}

export function Router({notFoundView}: { notFoundView: ReactNode }) {
  const [currentRoute, setCurrentRoute] = useState<Route|undefined>(
    findRouteForPath(window.location.pathname)
  );

  function navigateBack(e: PopStateEvent ) {
    const path = (e.currentTarget as Window).location.pathname
    const newRoute = findRouteForPath(path);
    setCurrentRoute(newRoute)
  }

  useEffect(() => {
    addEventListener('popstate', navigateBack)

    return () => {
      removeEventListener('popstate', navigateBack)
    }
  }, [])

  function navigateTo(route: typeof routes[number]['path']) {
    // pseudo-navigation
    const newRoute = findRouteForPath(route)

    if (newRoute !== undefined) {
      window.history.pushState(undefined, '', newRoute?.path)
    }

    setCurrentRoute(newRoute)
  }

  const value = {
    navigateTo,
  }

  return (
    <routerContext.Provider value={value}>
      { currentRoute === undefined ? notFoundView : <currentRoute.view/> }
    </routerContext.Provider>
  )
}
