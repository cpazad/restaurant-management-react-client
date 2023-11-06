import { Helmet } from "react-helmet-async";

const Profile = () => {
  return (
    <div>
      <Helmet>
        <title>Grand Restaurant | Profile </title>
      </Helmet>
      <div>
        <h2 className="text-white">Profile</h2>
      </div>
    </div>
  );
};

export default Profile;
