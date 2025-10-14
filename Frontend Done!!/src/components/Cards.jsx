import React from "react";

function Cards({ item }) {
  const handleBuyNow = (e) => {
    e.preventDefault(); // ✅ stop any default modal triggers
    console.log("Buy Now clicked for:", item.name);
  };

  return (
    <div className="mt-4 my-3 p-3">
      <div className="card bg-base-100 w-92 shadow-sm hover:shadow-lg transition-shadow duration-300 dark:bg-slate-900 dark:text-white">
        <figure className="h-60 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
          />
        </figure>

        <div className="card-body">
          <h2 className="font-semibold text-lg">{item.name}</h2>
          <p className="text-gray-600">{item.title}</p>

          <div className="flex items-center gap-2 mt-2">
            <span className="badge bg-pink-500 text-white border-none text-xs px-2 py-1 rounded-full">
              {item.category}
            </span>
          </div>

          {/* ✅ Price and Buy Now button */}
          <div className="flex justify-between items-center mt-3">
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              ${item.price}
            </p>
            <button
              onClick={handleBuyNow}
              className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
