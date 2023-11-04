/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla, id } =
    resData;
  // console.log(resData);
  // console.log("in Restaurant card");
  return (
    <Link
      to={`/restaurant/${id}`}
      className="max-md:w-full max-md:justify-center w-[250px] flex flex-col  p-5 mt-10 transition-all rounded-lg shadow-md cursor-pointer  hover:shadow-xl ease-in-out  "
    >
      <div>
        <div className=" p-1 max-h-[200px]">
          <img
            src={`${CDN_URL}${cloudinaryImageId}`}
            alt="restaurant"
            className="rounded-lg"
            width={250}
            height={200}
          />
        </div>
        <h3 className="mt-5 text-lg font-bold line-clamp-1">{name}</h3>
        <h4 className="text-sm line-clamp-1">{cuisines.join(", ")}</h4>
        <div className="flex justify-between gap-2 mt-4">
          <h4
            className={`${
              avgRating < 4 ? "bg-yellow-500" : "bg-green-600"
            } text-[12px] font-semibold text-white px-2 py-1 rounded-md`}
          >
            {avgRating} ⭐️
          </h4>
          <h4 className="text-[14px] font-bold uppercase">{costForTwo}</h4>
        </div>
        <h4 className="text-[10px] text-end">{sla.deliveryTime} minutes</h4>
        <div className="flex justify-end ">
          <button className="px-2 py-1 mt-4 text-sm text-center ease-in-out bg-yellow-600 rounded-lg text-yellow-50 hover:bg-yellow-500">
            Order
          </button>
          {/* <h2 className="">Explore</h2> */}
        </div>
      </div>
    </Link>
  );
};

// export const withPrometedLabel = (RestaurantCard) => {
//   return (props) => {
//     return (
//       <div>
//         <label>Promoted</label>
//         <RestaurantCard {...props} />
//       </div>
//     );
//   };
// };

export default RestaurantCard;
