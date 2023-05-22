import { Cookie } from '@core/utils/Cookie'
import axios from 'axios'
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export interface User {
	name: string
	avatar: string
}

export interface AuthContext {
	user?: User
	loginWithRedirect: () => void
	logout: () => void
}

const Context = createContext({} as AuthContext)

export const AuthProvider: React.FC<{ children?: any }> = ({ children }) => {
	const [searchParams, setSearchParams] = useSearchParams()

	useEffect(() => {
		if (searchParams.get('code') && !user) {
			let user = {
				name: 'Đặng Thuyền Vương',
				avatar: '',
			}
			setUser(user)
			Cookie.set('token', JSON.stringify(user))
			searchParams.delete('code')
			let newSerach = new URLSearchParams(searchParams)
			setSearchParams(newSerach)
		}

		window.addEventListener('message', onMessage)
	}, [searchParams])

	const onMessage = useCallback((event: any) => {
		console.log(event.data)

		if (event.origin !== 'https://login.com') {
			return
		}

		if (event.data) {
			Cookie.set('token', event.data)

			setUser(JSON.parse(event.data))
		}

		// window.removeEventListener('message', onMessage)
	}, [])

	const [user, setUser] = useState<User | undefined>(() => {
		if (Cookie.get('token')) {
			return JSON.parse(Cookie.get('token') || '')
		}
	})

	useEffect(() => {
		axios.get('http://localhost:3002/auth', { withCredentials: true }).then(res => {
			console.log(res)
		})
	}, [])

	const loginWithRedirect = async () => {
		let opener = window.open(`https://login.com?redirect=${window.location.href}`, '_self')
		console.log(opener?.window.document.cookie)
		opener?.blur()
		window.focus()
		// window.opener.p
		// window.addEventListener('message', onMessage)
	}
	const logout = () => {
		Cookie.delete('token')
		setUser(undefined)
	}

	return <Context.Provider value={{ loginWithRedirect, logout, user }}>{children}</Context.Provider>
}

export const useAuth = () => useContext(Context)
