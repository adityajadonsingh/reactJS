import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faLocationDot,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
const RestaurantCard = (props) => {
  let starLength = Math.floor(props.item.rating);
  starLength = starLength || 1;
  let starArr = new Array(starLength).fill(null);
  

  return (
    <>
      <div className="card w-1/3 flex flex-col">
        <div className="mx-4 my-4 rounded shadow-md">
        <div className="px-5 pt-3 pb-5">
          <div className="flex flex-wrap items-center gap-x-2">
            <h2 className="font-semibold text-xl text-[#1f2937]">{props.item.name}</h2>
            <div className="stars flex text-[#facc15] text-lg gap-x-1">
              {
                starArr.map((item, idx) => <FontAwesomeIcon icon={faStar} key={idx} />)
              }
              
            </div>
          </div>
          <div className="flex flex-wrap gap-x-2 my-3 items-center text-[#4b5563]">
            <FontAwesomeIcon icon={faLocationDot} />
            <span className="block">{props.item.address}</span>
          </div>
        </div>
        <div className="bg-[#f3f4f6] py-4 px-5">
          <div className="flex gap-x-2 mb-2 items-center text-[#22c55e] text-">
            <FontAwesomeIcon icon={faUtensils} />
            <span className="block">{props.item.type_of_food}</span>
          </div>
          <a className="text-[#3b82f6] hover:underline" href={props.item.URL}>Visit Menu</a>
        </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
