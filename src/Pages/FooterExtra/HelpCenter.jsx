import { Link } from "react-router-dom";
import mike from "../../assets/Images/mike.jpg"

const HelpCenter = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <img src={mike} alt="" />
          <h1 className="text-4xl font-extrabold mt-10 text-white"> Help Center </h1>
          <p className="py-6 text-2xl font-bold  italic text-white">
            Our Help Center will Open Soon! 
          </p>

          <Link to="/">
            <button className="btn btn-outline text-white">
              {" "}
              Go to Home Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
