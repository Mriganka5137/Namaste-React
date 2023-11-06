/* eslint-disable react/prop-types */

import ItemCard from "./ItemCard";

const RestaurantCategory = ({ data, showAccordion, setShowIndex }) => {
  return (
    <div className="mb-10 border-b border-yellow-200">
      <div
        className="flex justify-between w-full px-10 py-5 text-yellow-800 rounded-md cursor-pointer"
        onClick={() => {
          setShowIndex();
        }}
      >
        <span className="font-semibold ">
          {data.title} ({data.itemCards.length})
        </span>
        {showAccordion ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 stroke-yellow-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 stroke-yellow-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </div>
      {showAccordion && (
        <ul className="flex flex-col gap-10 ">
          {data.itemCards.map((item) => (
            <ItemCard key={item.card.info.name} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default RestaurantCategory;
