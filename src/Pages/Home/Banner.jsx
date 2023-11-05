import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/jM43SW0/burger-banner.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="flex justify-between ">
        <div className="w-1/2 text-white">
          <h3 className="mb-5 text-3xl font-bold text-[#c48f61]">Welcome to</h3>
          <h1 className="mb-5 text-5xl font-bold"> <span className="text-7xl font-extrabold">Grand</span> <br /> Restaurant </h1>
          <p className="mb-5 ">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to="/menu"> <button className="btn btn-primary bg-mybrown text-white rounded-sm border-0">Get Started</button></Link>
         
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
};

export default Banner;
