import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useCart from "../../../Hooks/useCart";

const ProductDetails = () => {
  const foods = useLoaderData();
  const { users } = useContext(AuthContext);
  const { refetch } = useCart();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { strMeal, price, strMealThumb, strCategory, strArea, details, _id } =
    foods;
  const handleAddtoCart = () => {
    if (users && users.email) {
      // send cart items to database
      const cartItem = {
        menuId: _id,
        email: users.email,
        strMeal,
        strMealThumb,
        price,
        strArea,
        strCategory
      };
      axiosPublic.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${strMeal} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch();
          navigate("/profile/mycart")
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          //Send the user to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card lg:card-side bg-neutral-800 text-gray-400 shadow-xl m-20 rounded-md shadow-mybrown/30">
      <figure className="w-full lg:w-96">
        <img src={strMealThumb} alt="Album" />
      </figure>
      <div className="card-body">
        <div className="text-left sm:pl-20">
          <h2 className="card-title text-mybrown"> {strMeal}</h2>
          <p className="pt-4">
            <span className="font-bold">Price:$</span> {price}
          </p>
          <p>
            <span className="font-bold">Category:</span> {strCategory}
          </p>
          <p>
            <span className="font-bold">Made By:</span> Who?{" "}
          </p>
          <p>
            <span className="font-bold"> Origin:</span> {strArea}
          </p>
          <p className="lg:w-[600px] mt-2">
            <span className="font-bold"> Details:</span> {details}
          </p>
          <p className="text-xs mt-2">
            Notes: Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </p>

          <div className="card-actions justify-start pt-5">
            <button
              onClick={() => handleAddtoCart(_id)}
              className="btn btn-outline text-mybrown rounded-sm"
            >
              {" "}
              add to Cart{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
