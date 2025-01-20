import {useAuth} from "../components/auth/useAuth.ts";
import {useRouter} from "../components/router/useRouter.ts";

export function LandingPage() {
  const { navigateTo } = useRouter()
  const { logout } = useAuth()

  return (
    <main className={'p-2 space-y-4'}>
      <p>Hello, motherfuckers</p>
      <p><button onClick={() => navigateTo('/students')}>Students</button></p>
      <p><button onClick={logout}>Log out</button></p>
    </main>
  )
}
