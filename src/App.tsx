/* eslint-disable prettier/prettier */
import logo from "./logo.svg"
import Navbar from "../src/components/layouts/Navbar"
// import SignUpForm from "../src/components/pages/SignUpForm"
// import TenBooks from "../src/components/pages/Books/TenBooks"
import Numericals from "../src/components/math/Numericals"
import MathprogramOne from "../src/components/math/MathprogramOne"
import Mathprogram2 from "../src/components/math/Mathprogram2"
import Mathprogram3 from "../src/components/math/Mathprogram3"
import Mathprogram4 from "../src/components/math/Mathprogram4"
import Footer from "../src/components/pages/Footer"
// import LoginForm from "../src/components/pages/LoginForm"
import "./App.css"

function App() {
  return (
    <div className="App container mx-auto">
     <Navbar/>
     <Numericals/>
     <MathprogramOne/>
     <Mathprogram2/>
     <Mathprogram3/>
     <Mathprogram4/>
     
     {/* <TenBooks/> */}
     {/* <SignUpForm/> */}
     {/* <LoginForm/> */}
     <Footer/>
    </div>
  )
}

export default App
