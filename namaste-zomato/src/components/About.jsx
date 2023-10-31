// import UserCard from "./UserCard";
import UserCardClass from "./UserCardClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div className="px-10 py-5 pt-36">
        <h1 className="mb-3 text-2xl font-semibold">About us</h1>
        <hr />
        {/* <UserCard /> */}
        <UserCardClass />
      </div>
    );
  }
}

/**
  -  Parent Constructor
  -  Parent Render
    
    - First Constructor
    - First Render

    - Second Constructor
    - Second Render

    - First ComponentDidMount
    - Second ComponentDidMount
    
  - Parent ComponentDidMount


 */

// const About = () => {
//   return (
//     <div className="px-10 py-5 pt-36">
//       <h1 className="mb-3 text-2xl font-semibold">About us</h1>
//       <hr />
//       <UserCard />
//       <UserCardClass
//         name="Mriganka Mousum Gogoi - class"
//         location="Khumtai, Golghat"
//       />
//     </div>
//   );
// };

export default About;
