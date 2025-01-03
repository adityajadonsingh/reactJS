import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import RestaurantCard from "./RestaurantCard";
import data from "../../dataset";

const Restaurants = () => {
  const [searchText, setSearch] = useState("");
  const [minRating, setMinRating] = useState(0);
  const handleSearchText = (e) => {
    setSearch(e.target.value);
  };
  const handleMinRating = (e) => {
    setMinRating(Number(e.target.value));
  };
  return (
    <>
      <Header />
      <section className="resturant pt-32 pb-20">
        <div className="container mx-auto">
          <form action="">
            <div className="search-container flex justify-between">
              <input
                type="text"
                placeholder="Search Restaurants"
                className="border py-1 px-3 focus:outline-none"
                onChange={handleSearchText}
              />
              <div className="flex items-center gap-x-2">
                <span className="block">Minimum Rating</span>
                <input
                  className="border py-1 px-3 w-16 focus:outline-none"
                  type="number"
                  placeholder="4"
                  onChange={handleMinRating}
                />
              </div>
            </div>
          </form>
          <hr className="my-5" />
          <div className="card-container flex flex-wrap">
            {
              data
              .filter((item) =>
                (item.name.toLowerCase().includes(searchText.toLowerCase()) || item.address.toLowerCase().includes(searchText.toLowerCase()) ) && item.rating >= minRating
              )
              .map((item) => 
                <RestaurantCard key={item._id} item={item} />
              )
            }
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Restaurants;
