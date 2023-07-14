/* eslint-disable prettier/prettier */

import { createBrowserRouter } from "react-router-dom"
import App from '../../App'
import LoginForm from '../pages/LoginForm'
import SignUpForm from '../pages/SignUpForm'
import AllBooks from '../pages/Books/AllBooks'

const routes = createBrowserRouter([
  
   
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    // eslint-disable-next-line react/jsx-no-undef
    element: <LoginForm />,
  },
  {
    path: "/signup",
    element: <SignUpForm />,
  },
  {
    path: "/allbooks",
    element: <AllBooks />,
  },

])

export default routes
