import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { removeUser } from '../store/slices/userSlice'

export function SignOutButton(): JSX.Element {
  const dispatch = useDispatch()
  return (
    <button
      className="bg-beige my-10 rounded-xl text-8xl"
      onClick={() => dispatch(removeUser())}
    >
      <Link to="/signin">SIGN OUT</Link>
    </button>
  )
}
