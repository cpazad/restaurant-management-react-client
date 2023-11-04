const Subscribe = () => {
  return (
    <div className="py-20 flex flex-col justify-center items-center">
      <div className="divider w-3/4 text-mybrown  mx-auto text-2xl uppercase font-bold before:bg-mybrown after:bg-mybrown pb-5">
        Subscribe Now{" "}
      </div>
      <div className="flex justify-center items-center gap-5">
        <h3 className="text-right text-lg text-white">Subscribe now to receive fresh <br /> offer and deal by email </h3>
        <div className="join">
          <input
            className="input input-bordered join-item"
            placeholder="Email"
          />
          <button className="btn join-item  bg-mybrown text-white border-mybrown">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
