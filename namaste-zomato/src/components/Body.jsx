import RestaurantCard from "./RestaurantCard";

const Body = () => {
  // Optional Chaining

  return (
    <div className="flex flex-col justify-start w-full px-10 py-5">
      <div className="">
        <input
          type="search"
          name="search"
          id="search"
          className="w-full px-5 py-2 mt-5 rounded-md bg-slate-200"
          placeholder="Search"
        />
      </div>
      <div className="flex gap-10 max-sm:flex-col max-sm:items-center">
        <RestaurantCard
          name="The Pork Company"
          url="https://b.zmtcdn.com/data/pictures/chains/9/19168749/f4c3930c76078f50b9f96ce68d866d30_o2_featured_v2.jpg?output-format=webp"
        />
        <RestaurantCard
          name="Shanghai Wok"
          url="https://b.zmtcdn.com/data/pictures/1/2100071/7841939cd4dd2fa641c4ad1dfbb50f0c_o2_featured_v2.jpg?output-format=webp"
        />
      </div>
    </div>
  );
};

export default Body;
