import { createBrowserRouter } from "react-router-dom";
import Login from "../../pages/auth/login";
import ForgotPass from "../../pages/auth/Forgot_pass";
import Registration from "../../pages/auth/registration";

const router = createBrowserRouter([
    {
        path: '/auth',
        children: [
            {
                path: 'login',
                element: <Login />,
                index: true
            },
            {
                path: 'password/reset',
                element: <ForgotPass />
            },
            {
                path: 'registration',
                element: <Registration />
            }
        ]
    }
]);

export default router;
