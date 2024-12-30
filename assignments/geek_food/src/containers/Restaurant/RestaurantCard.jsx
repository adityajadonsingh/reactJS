import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faLocationDot,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
const RestaurantCard = () => {
  return (
    <>
      <div className="card w-1/3 flex flex-col">
        <div className="mx-4 my-4 rounded shadow-md">
        <div className="px-5 pt-3 pb-5">
          <div className="flex flex-wrap items-center gap-x-2">
            <h2 className="font-semibold text-xl text-[#1f2937]">.CN Chinese</h2>
            <div className="stars flex text-[#facc15] text-lg gap-x-1">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
          <div className="flex flex-wrap gap-x-2 my-3 items-center text-[#4b5563]">
            <FontAwesomeIcon icon={faLocationDot} />
            <span className="block">228 City Road, Cardiff</span>
          </div>
        </div>
        <div className="bg-[#f3f4f6] py-4 px-5">
          <div className="flex gap-x-2 mb-2 items-center text-[#22c55e] text-">
            <FontAwesomeIcon icon={faUtensils} />
            <span className="block">Chinese</span>
          </div>
          <a className="text-[#3b82f6] hover:underline" href="#">Visit Menu</a>
        </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
