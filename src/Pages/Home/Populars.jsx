import { useEffect, useState } from "react";
import Items from "../../components/Items";

const Populars = () => {
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      });
  }, []);

  const totalProducts = foods.filter((food) =>
    food.strMeal.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(totalProducts.length / itemsPerPage);

  const filteredfoods = totalProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  console.log(filteredfoods.length);
  console.log(totalPages);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  return (
    <div>
      <div className="py-5">
        <h2 className="text-2xl text-white py-3 font-popins">
          {" "}
          Search your desired food by Name{" "}
        </h2>
        <input
          className="input input-bordered rounded-sm"
          type="text"
          placeholder="Start typing food name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto pb-5">
        {filteredfoods.map((food) => (
          <Items key={food._id} food={food}></Items>
        ))}
      </div>
      <div className="flex justify-between py-10">
        <button
          className="bg-mybrown hover:bg-neutral-800 text-white font-bold py-2 px-4 rounded"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {/* <span className="text-mybrown">
          Page {currentPage} of {totalPages}
        </span> */}
        <div>
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`bg-neutral-800 text-white px-4 py-2 rounded mr-2 ${
                currentPage === pageNumber ? "bg-gray-500" : ""
              }`}
            >
              {pageNumber}
            </button>
          ))}
        </div>
        <button
          className="bg-mybrown hover:bg-neutral-800 text-white font-bold py-2 px-4 rounded"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Populars;
