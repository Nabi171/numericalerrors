/* eslint-disable prettier/prettier */
import logo from "./logo.svg"
import Navbar from "../src/components/layouts/Navbar"
// import SignUpForm from "../src/components/pages/SignUpForm"
import LoginForm from "../src/components/pages/LoginForm"
import "./App.css"

function App() {
  return (
    <div className="App">
     <Navbar/>
     {/* <SignUpForm/> */}
     <LoginForm/>
    </div>
  )
}

export default App
