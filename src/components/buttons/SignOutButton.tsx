import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { signOutFirebase } from '../../firebase'

export function SignOutButton(): JSX.Element {
  const dispatch = useDispatch()
  return (
    <button
      className="bg-beige p-3 my-10 rounded-xl text-6xl"
      onClick={() => {
        signOutFirebase(dispatch)
      }}
    >
      <Link to="/signin">SIGN OUT</Link>
    </button>
  )
}
