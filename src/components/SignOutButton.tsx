import { getAuth, signOut } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { removeUser } from '../store/slices/userSlice'

export function SignOutButton(): JSX.Element {
  const dispatch = useDispatch()
  return (
    <button
      className="bg-beige p-3 my-10 rounded-xl text-6xl"
      onClick={() => {
        const auth = getAuth()
        signOut(auth).then(() => {
          // Sign-out successful.
        }).catch((error) => {
          alert(error)
        })
        dispatch(removeUser())
      }}
    >
      <Link to="/signin">SIGN OUT</Link>
    </button>
  )
}
