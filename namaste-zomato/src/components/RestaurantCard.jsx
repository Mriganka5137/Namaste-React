import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  return (
    <div className="max-md:w-full max-md:justify-center w-[250px] flex flex-col  p-5 mt-10 transition-all border rounded-lg shadow-md cursor-pointer  bg-slate-100 hover:border-green-950 hover:translate-y-1">
      <div className=" p-1 object-contain  max-h-[200px]">
        <img
          src={`${CDN_URL}${cloudinaryImageId}`}
          alt="restaurant"
          className="rounded-lg "
          width={250}
          height={200}
        />
      </div>
      <h3 className="mt-5 text-lg font-bold line-clamp-1">{name}</h3>
      <h4 className="text-sm line-clamp-1">{cuisines.join(", ")}</h4>
      <div className="flex justify-between gap-2 mt-4">
        <h4 className="text-[14px] font-semibold text-red-800">
          {" "}
          {avgRating} ⭐️
        </h4>
        <h4 className="text-[14px] font-bold uppercase">{costForTwo}</h4>
      </div>
      <h4 className="text-[10px] text-end">{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
