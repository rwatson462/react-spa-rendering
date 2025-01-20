import {FormEvent, useState} from "react";
import {findUserByEmail} from "../lib/queries/findUserByEmail.ts";
import {useAuth} from "../components/auth/useAuth.ts";

export function LogInPage() {
  const [error, setError] = useState<string|undefined>();
  const { login } = useAuth();

  function doLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(undefined)

    const formData = new FormData(e.currentTarget)

    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const user = findUserByEmail(email)
    if (user !== undefined) {
      if (user.password === password) {
        login(user)
        return
      }
    }

    setError('Incorrect email or password')
  }

  return (
    <form onSubmit={doLogin} className={'m-4 p-4 rounded border max-w-lg flex flex-col gap-2'}>
      <input type={'email'} name={'email'} placeholder={'Email address'} autoComplete={'email'} className={'px-1 rounded border'}/>
      <input type={'password'} name={'password'} placeholder={'Password'} autoComplete={'current-password'} className={'px-1 rounded border'}/>
      <button type={'submit'} className={'px-1 rounded shadow border border-blue-500 bg-blue-100 hover:bg-blue-50 transition-all'}>Log in</button>
      {error && <p className={'text-red-950 bg-red-500 px-2 py-0.5 rounded'}>{error}</p>}
    </form>
  )
}
