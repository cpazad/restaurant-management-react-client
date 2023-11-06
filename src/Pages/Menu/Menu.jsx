import { Helmet } from "react-helmet-async"
import Popular from "../Home/Popular"


const Menu = () => {
  return (
    <div>
      <Helmet>
        <title> Grand Restaurant | Menu </title>
      </Helmet>
      <div className="flex flex-col justify-center items-center">
        <Popular></Popular>
      </div>
    </div>
  )
}

export default Menu