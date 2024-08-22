import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import { useUserStore } from './store/User.store'

const App = () => {
	const refresh = useUserStore(state => state.refresh)
	const getUserData = useUserStore(state => state.getUserData)
	const mySession = Cookies.get('mySession')
	const user = useUserStore(state => state.user)
	const isAuth = useUserStore(state => state.isAuth)

	useEffect(() => {
		if (mySession?.length !== 0 && Object.keys(user).length === 0) {
			getUserData()
		}
		if (isAuth) {
			refresh()
		}
	}, [])
	return <RouterProvider router={router} />
}

export default App
