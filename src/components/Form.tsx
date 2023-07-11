import { useState } from 'react'

export function Form(props: {
  title: string
  handleClick: (
    email: string,
    password: string,
    event: Event | undefined
  ) => void
}): JSX.Element {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  return (
    <form className="flex flex-col gap-5 mx-auto my-auto ">
      <input
        className="mx-auto form-input rounded-full bg-gray text-5xl"
        placeholder="e-mail"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
      ></input>
      <input
        className="mx-auto form-input rounded-full bg-gray text-5xl"
        placeholder="password"
        type="password"
        value={pass}
        onChange={(e) => {
          setPass(e.target.value)
        }}
      ></input>
      <button
        className="mx-auto button rounded-full bg-beige text-5xl"
        onClick={() => {
          props.handleClick(email, pass, event)
        }}
      >
        {props.title}
      </button>
    </form>
  )
}
