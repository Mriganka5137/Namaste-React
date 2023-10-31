import { useState } from "react";

const UserCard = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="max-w-xl px-10 py-8 mt-5 border rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-600">
        Mriganka Mousum Gogoi
      </h2>
      <h3 className="text-sm text-gray-400">Location : Golaghat</h3>
      <p className="text-xs text-gray-400">
        Conatct: mrigankagogoi5137@gmail.com
      </p>
      <button
        className="px-4 py-1 mt-2 text-white bg-red-700 rounded-lg"
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        {count}
      </button>
    </div>
  );
};

export default UserCard;
