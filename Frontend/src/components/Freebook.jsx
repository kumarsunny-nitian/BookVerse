import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

function Freebook() {
  const [list, setList] = useState([]);
  const [reRender, setReRender] = useState(false); // ✅ new state to re-render

  useEffect(() => {
    fetch("/list.json")
      .then((res) => res.json())
      .then((data) => {
        setList(data);
        setTimeout(() => setReRender(true), 100); // ✅ re-render fix
      })
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  const filterData = list.filter((data) => data.category === "Free");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-8">
      <div className="text-center mb-6">
        <h1 className="font-semibold text-2xl pb-2">Free Offered Courses</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          veritatis alias pariatur ad dolor repudiandae eligendi corporis nulla
          non suscipit, iure neque earum?
        </p>
      </div>

      <div className="slider-container">
        {filterData.length > 0 ? (
          <Slider key={reRender} {...settings}>
            {filterData.map((item) => (
              <div key={item.id} className="px-3">
                <Cards item={item} />
              </div>
            ))}
          </Slider>
        ) : (
          <p className="text-center text-gray-500">Loading cards...</p>
        )}
      </div>
    </div>
  );
}

export default Freebook;
