import img1 from "../../src/assets/images/beef-burger.png"
const Items = () => {
  return (
    <div className="card w-80 bg-slate-800  shadow-xl rounded-sm">
      <figure className="px-10 pt-10">
        <img
          src={img1}
          alt="Burger"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-rubik text-mybrown"> Beef Burger </h2>
        <p className="text-left text-stone-300 pl-1"> Category: Burger </p>
        <p className="text-left text-stone-300 pl-1"> Price:$15 </p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline text-mybrown rounded-sm btn-sm">Details </button>
        </div>
      </div>
    </div>
  );
};

export default Items;
