import React from 'react'
import useLocalStorage from 'use-local-storage'
import "./Commutator.css"

function Commutator() {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (
    <div className="commutator"  data-theme={theme}>
        <p>Dark Mode</p>
        <label className="switch" onClick={switchTheme}>
          <input type="checkbox" />
          <span></span>
        </label>
    </div>
  )
}

export default Commutator