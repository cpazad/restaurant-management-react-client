import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <Helmet>
        <title>Grand Restaurant | Profile </title>
      </Helmet>
      <div className="flex flex-col sm:flex-row p-10">
        <div className="sm:w-1/5 bg-neutral-800 shadow-md shadow-mybrown mx-2 min-h-screen">
          <h2 className="text-white">Profile</h2>
        </div>
        <div className="sm:w-4/5  min-h-screen border-mybrown border-2">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Profile;
