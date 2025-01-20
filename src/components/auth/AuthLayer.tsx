import {PropsWithChildren} from "react";
import {AuthProvider} from "./AuthProvider.tsx";
import {AuthMessage} from "./AuthMessage.tsx";

export function AuthLayer({children}: PropsWithChildren) {
  return (
    <AuthProvider>
      <AuthMessage/>
      {children}
    </AuthProvider>
  )
}
