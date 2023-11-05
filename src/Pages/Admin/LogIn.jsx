import { Link } from "react-router-dom";
import "./login.css";
import { FaUser, FaLock } from "react-icons/fa";

const LogIn = () => {
  return (
    <div className="form-container">
      <div className="wrapper">
        <form>
          <h2 className="text-2xl font-bold"> Log In </h2>
          <div className="input-box">
            <input className="placeholder-opacity-100" type="email" name="email" placeholder="email" required />
            <i>
              <FaUser className="inline"></FaUser>
            </i>
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="password"
              required
            />
            <i>
              <FaLock className="inline"></FaLock>
            </i>
          </div>
          <button className="btn" type="submit"> Log In </button>
          <div className="register-link py-5">
            <p>
              {" "}
              Don not have account yet? <Link to="/registration"> <span className="text-mybrown font-bold hover:underline"> Sign Up </span> </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
