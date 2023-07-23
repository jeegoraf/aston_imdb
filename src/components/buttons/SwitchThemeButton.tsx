import { useContext } from 'react'

import { ThemeContext } from '../../App'

export function SwitchThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext)
  const handleClick = () => {
    theme === 'bg-sky-900' ? setTheme('bg-pink-800') : setTheme('bg-sky-900')
  }
  return (
    <button
      onClick={handleClick}
      className="bg-beige p-3 my-10 rounded-xl text-6xl"
    >
      SWITCH THEME
    </button>
  )
}
