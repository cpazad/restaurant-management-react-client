import { useLoaderData } from "react-router-dom";
// import ketchup from "../../../assets/images/tomato_sauce.jpg";
const ProductDetails = () => {
  const foods = useLoaderData();
  // const id = useParams();
  // const idInt = parseInt(id);
  // const item = foods.find((food) => food.id === idInt);
  console.log(foods);
  const {strMeal,price,strMealThumb,strCategory,strArea, details } = foods
  return (
    <div className="card lg:card-side bg-neutral-800 text-gray-400 shadow-xl m-20 rounded-md shadow-mybrown/30">
      <figure className="w-full lg:w-96">
        <img src={strMealThumb} alt="Album" />
      </figure>
      <div className="card-body">
        <div className="text-left sm:pl-20">
          <h2 className="card-title"> {strMeal}</h2>
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
          <p className="text-xs mt-2">Notes: Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>

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
