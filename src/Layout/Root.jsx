import { Outlet } from "react-router-dom"
import "./root.css"
import Footer from "../Pages/Shared/Footer/Footer"
import Navbar from "../Pages/Shared/Navbar/Navbar"
import Topbar from "../Pages/Shared/Header/Topbar"
import Scrollbar from "../Pages/Shared/Header/Scrollbar"


const Root = () => {
  return (
    <div className="root-container bg-[#1c2124]">
        <Scrollbar></Scrollbar>
        <Topbar></Topbar>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>


    </div>
  )
}

export default Root