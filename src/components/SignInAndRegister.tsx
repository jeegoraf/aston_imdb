import React from 'react'

import { RegisterButton } from './RegisterButton'
import { SignInButton } from './SignInButton'

export function SignInAndRegister(): JSX.Element {
  return (
    <div className="flex justify-center gap-8 my-10">
      <SignInButton></SignInButton>
      <RegisterButton></RegisterButton>
    </div>
  )
}