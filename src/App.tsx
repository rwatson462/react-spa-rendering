import {AuthLayer} from "./components/auth/AuthLayer.tsx";
import {Router} from "./components/router/Router.tsx";
import {NotFoundPage} from "./pages/NotFoundPage.tsx";

export function App() {
  return (
    <AuthLayer>
      <Router notFoundView={<NotFoundPage/>}/>
    </AuthLayer>
  )
}
