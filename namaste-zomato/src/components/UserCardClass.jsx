import React from "react";
import githubData from "../utils/githubData";
import { Link } from "react-router-dom";
class UserCardClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: githubData,
    };
  }

  async componentDidMount() {
    // const res = await fetch("https://api.github.com/users/Mriganka5137");
    // const data = await res.json();
    // this.setState({
    //   userInfo: data,
    // });
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  render() {
    const {
      name,
      location,
      avatar_url,
      bio,
      twitter_username,
      followers,
      following,
      public_repos,
    } = this.state.userInfo;
    return (
      <Link
        to="https://github.com/Mriganka5137/"
        className="flex justify-between max-w-xl gap-5 px-10 py-8 mt-5 border rounded-lg shadow-md hover:shadow-lg max-sm:flex-col-reverse"
      >
        <div>
          <h2 className="text-xl font-semibold text-gray-600 ">{name}</h2>
          <h3 className="text-sm text-gray-400">Location : {location}</h3>
          <Link
            to="https://twitter.com/_Mriganka_"
            className="mt-5 text-sm text-blue-900"
          >
            twitter: {twitter_username}
          </Link>
          <p className="max-w-md mt-2 text-xs text-gray-400">{bio}</p>
          <div className="flex gap-5 mt-5 font-semibold text-gray-500 max-sm:text-sm max-sm:flex-col">
            <p>{followers} followers</p>
            <p>{following} following</p>
            <p>{public_repos} repos</p>
          </div>
        </div>
        <div>
          <img
            src={avatar_url}
            alt="profile"
            width={50}
            height={50}
            className="rounded-full "
          />
        </div>
      </Link>
    );
  }
}

export default UserCardClass;
