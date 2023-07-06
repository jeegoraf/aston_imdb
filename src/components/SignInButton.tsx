import React from 'react'
import { Link } from 'react-router-dom'

export function SignInButton(): JSX.Element {
  return (
    <button className="bg-beige rounded-xl text-8xl">
      <Link to="/signin">LOGIN</Link>
    </button>
  )
}
