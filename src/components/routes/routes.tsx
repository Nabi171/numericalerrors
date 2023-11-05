/* eslint-disable prettier/prettier */

import { createBrowserRouter } from "react-router-dom"
import App from '../../App'
import LoginForm from '../pages/LoginForm'
import SignUpForm from '../pages/SignUpForm'


import PrivateRoute from '../routes/PrivateRoute'

const routes = createBrowserRouter([
  
   
  {
    path: "/",
    element: 
    // <PrivateRoute>
         <App />
    // </PrivateRoute>,
    
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



])

export default routes
