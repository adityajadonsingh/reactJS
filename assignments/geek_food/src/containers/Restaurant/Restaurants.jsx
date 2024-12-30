import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import RestaurantCard from "./RestaurantCard";



const Restaurants = (props) => {

    const [resData, setData] = useState(data);

  return (
    <>
      <Header />
      <section className="resturant pt-32 pb-20">
        <div className="container mx-auto">
          <div className="search-container flex justify-between">
            <input
              type="text"
              placeholder="Search Restaurants"
              className="border py-1 px-3 focus:outline-none"
            />
            <div className="flex items-center gap-x-2">
              <span className="block">Minimum Rating</span>
              <input
                className="border py-1 px-3 w-10 focus:outline-none"
                type="text"
                placeholder="4"
              />
            </div>
          </div>
          <hr className="my-5" />
          <div className="card-container flex flex-wrap">
            <RestaurantCard />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Restaurants;
