import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import { useUserStore } from './store/User.store'

const App = () => {

	const refresh = useUserStore(state => state.refresh)

	useEffect(() => {
		refresh()
	}, [])
	return (<RouterProvider router={router} />)
}

export default App