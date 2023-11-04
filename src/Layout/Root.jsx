import { Outlet } from "react-router-dom"
import "./root.css"
import Footer from "../Pages/Shared/Footer/Footer"
import Navbar from "../Pages/Shared/Navbar/Navbar"


const Root = () => {
  return (
    <div className="root-container bg-slate-100">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>


    </div>
  )
}

export default Root