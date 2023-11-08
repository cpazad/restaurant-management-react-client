import ketchup from "../../../assets/images/tomato_sauce.jpg";
const ProductDetails = () => {
  return (
    <div className="card lg:card-side bg-neutral-800 text-gray-400 shadow-xl m-20 rounded-md">
      <figure className="w-full lg:w-96">
        <img src={ketchup} alt="Album" />
      </figure>
      <div className="card-body">
        <div className="text-left pl-20">
          <h2 className="card-title"> New album is released!</h2>
          <p className="pt-4">
            <span className="font-bold">Price:$</span> 15{" "}
          </p>
          <p>
            <span className="font-bold">Category:</span> Burger{" "}
          </p>
          <p>
            <span className="font-bold">Made By:</span> Who?{" "}
          </p>
          <p>
            <span className="font-bold"> Origin:</span> America{" "}
          </p>
          <p className="lg:w-[600px] mt-2">
            <span className="font-bold"> Details:</span> Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quae facere molestiae a maxime
            labore consequatur quidem. Commodi illo rem porro consectetur atque
            incidunt quos voluptatum esse sapiente. Omnis doloribus nisi nostrum
            itaque, eius veritatis?{" "}
          </p>

          <div className="card-actions justify-start pt-5">
            <button className="btn btn-outline text-mybrown rounded-sm">
              {" "}
              Order Now{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
