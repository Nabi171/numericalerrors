/* eslint-disable prettier/prettier */

import { createBrowserRouter } from "react-router-dom"
import App from '../../App'
import LoginForm from '../pages/LoginForm'
import SignUpForm from '../pages/SignUpForm'
import AllBooks from '../pages/Books/AllBooks'
import Books from '../pages/Books/Books'
import BookDetails from '../pages/Books/BookDetails'
import AddNew from '../pages/Books/AddNew'
import EditeBook from '../pages/Books/EditeBook'

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
    path: `allbooks/bookdetails/:bookId`,
    element: <BookDetails />,
  },
  {
    path: "/allbooks",
    element: <Books />,
  },
  {
    path: "/addnew",
    element: <AddNew />,
  },
  {
    path: "/edit/:editId",
    element: <EditeBook />,
  },

])

export default routes
