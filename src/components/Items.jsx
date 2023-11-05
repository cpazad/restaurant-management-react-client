import img1 from "../../src/assets/images/beef-burger.png"
const Items = () => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl rounded-sm">
      <figure className="px-10 pt-10">
        <img
          src={img1}
          alt="Burger"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-mybrown"> Beef Burger </h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, odio.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline text-mybrown rounded-sm btn-sm">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Items;
