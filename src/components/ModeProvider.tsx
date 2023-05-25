import { createContext, useContext, useEffect, useState } from 'react'

export interface ModeContextProps {
	mode: string
	toggleMode: () => void
}

const Context = createContext({} as ModeContextProps)

export const ModeProvider: React.FC<{ children: any }> = ({ children }) => {
	const [mode, setMode] = useState(localStorage.theme)
	useEffect(() => {
		if (mode === 'dark') {
			document.documentElement.classList.add('dark')
		}
	}, [])

	const toggleMode = () => {
		if (mode === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			document.documentElement.classList.remove('dark')
			localStorage.theme = 'light'
		} else {
			document.documentElement.classList.add('dark')
			localStorage.theme = 'dark'
		}

		setMode(localStorage.theme)
	}
	return <Context.Provider value={{ mode, toggleMode }}>{children}</Context.Provider>
}

export const useMode = () => useContext(Context)
