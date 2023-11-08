import { Helmet } from "react-helmet-async";

import Populars from "../Home/Populars";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title> Grand Restaurant | Menu </title>
      </Helmet>
      <div className="flex flex-col justify-center items-center">
        <Populars></Populars>
      </div>
    </div>
  );
};

export default Menu;
