import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../../layouts/mainlayout'
import ForgotPass from '../../pages/auth/Forgot_pass'
import Login from '../../pages/auth/login'
import Registration from '../../pages/auth/registration'
import WorkSpaces from '../../pages/workspaces'

const router = createBrowserRouter([
	{
		path: '/auth',
		children: [
			{
				path: 'login',
				element: <Login />,
				index: true,
			},
			{
				path: 'password/reset',
				element: <ForgotPass />,
			},
			{
				path: 'registration',
				element: <Registration />,
			},
		],
	},
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: 'workspaces',
				element: <WorkSpaces />,
			},
		],
	},
])

export default router
