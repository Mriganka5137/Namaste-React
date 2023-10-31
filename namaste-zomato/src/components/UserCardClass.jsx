import React from "react";
class UserCardClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, location } = this.props;
    return (
      <div className="max-w-xl px-10 py-8 mt-5 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold text-gray-600">{name}</h2>
        <h3 className="text-sm text-gray-400">Location : {location}</h3>
        <p className="text-xs text-gray-400">
          Conatct: mrigankagogoi5137@gmail.com
        </p>
      </div>
    );
  }
}

export default UserCardClass;
