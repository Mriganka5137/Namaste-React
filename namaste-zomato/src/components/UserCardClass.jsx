import React from "react";
class UserCardClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log(this.props.name + "Child Constructor");
  }

  componentDidMount() {
    console.log(this.props.name + "Child Component did Mount ");
  }

  render() {
    console.log(this.props.name + "Child Render");
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="max-w-xl px-10 py-8 mt-5 border rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-600">{name}</h2>
        <h3 className="text-sm text-gray-400">Location : {location}</h3>
        <p className="text-xs text-gray-400">
          Conatct: mrigankagogoi5137@gmail.com
        </p>
        <button
          className="px-4 py-1 mt-2 text-white bg-red-700 rounded-lg"
          onClick={() => {
            // this.state.count += 1;
            // NEVER UPDATE STATE VARIABLE DIRECTLY
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          {count}
        </button>
      </div>
    );
  }
}

export default UserCardClass;
