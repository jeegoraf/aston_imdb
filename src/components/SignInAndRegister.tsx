import React from 'react'

import { RegisterButton } from './RegisterButton'
import { SignInButton } from './SignInButton'

export function SignInAndRegister(): JSX.Element {
  return (
    <div className="flex justify-center content-center gap-8 py-10">
      <SignInButton></SignInButton>
      <RegisterButton></RegisterButton>
    </div>
  )
}
