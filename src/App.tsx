/* eslint-disable prettier/prettier */
import logo from "./logo.svg"
import Navbar from "../src/components/layouts/Navbar"
import SignUpForm from "../src/components/pages/SignUpForm"
import TenBooks from "../src/components/pages/Books/TenBooks"
import Footer from "../src/components/pages/Footer"
// import LoginForm from "../src/components/pages/LoginForm"
// import "./App.css"

function App() {
  return (
    <div className="App">
     <Navbar/>
     <TenBooks/>
     {/* <SignUpForm/> */}
     {/* <LoginForm/> */}
     <Footer/>
    </div>
  )
}

export default App
