import { Link } from "react-router-dom";
import "./login.css";
import { FaUser, FaLock, FaEnvelope, FaImage } from "react-icons/fa";

const Register = () => {
  return (
    <div className="form-container">
    <div className="wrapper">
      <form>
        <h2 className="text-2xl font-bold"> Registration </h2>
        <div className="input-box">
          <input className="placeholder-opacity-100" type="text" name="name" placeholder="Name" required />
          <i>
            <FaUser className="inline"></FaUser>
          </i>
        </div>
        <div className="input-box">
          <input className="placeholder-opacity-100" type="email" name="email" placeholder="email" required />
          <i>
            <FaEnvelope className="inline"></FaEnvelope>
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
        <div className="input-box">
          <input className="placeholder-opacity-100" type="text" name="photo" placeholder="Insert Photo Url" />
          <i>
            <FaImage className="inline"></FaImage>
          </i>
        </div>
        <button className="btn" type="submit"> Log In </button>
        <div className="register-link py-5">
          <p>
            {" "}
            Already have account! <Link to="/login"> <span className="text-mybrown font-bold hover:underline">Log In</span> </Link>
          </p>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Register