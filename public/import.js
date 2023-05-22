class Cookie {
	static set(name, value, days) {
		let expires = ''
		if (days) {
			const date = new Date()
			date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
			expires = '; expires=' + date.toUTCString()
		}
		document.cookie =
			name +
			'=' +
			value +
			expires +
			'; path=/' +
			'; domain=' +
			// '.dangthuyenvuong.com' +
			window.location.host.replace(/^[\w-]+\.([\w-]+\.\w+)$/, '$1') +
			'; Secure=false' +
			// 'localhost:3002'
			'; SameSite=None'
	}

	static get(name) {
		const cookies = document.cookie.split(';')
		for (let i = 0; i < cookies.length; i++) {
			const cookie = cookies[i].trim()
			if (cookie.startsWith(name + '=')) {
				return cookie.substring(name.length + 1)
			}
		}
		return null
	}

	static delete(name) {
		document.cookie =
			name + '=; Max-Age=-99999999; path=/' + ';domain=' + window.location.host.replace(/^[\w-]+\.([\w-]+\.\w+)$/, '$1')
		// 'localhost'
	}
}

if (Cookie.get('token')) {
	window.USER = JSON.parse(Cookie.get('token'))
}
