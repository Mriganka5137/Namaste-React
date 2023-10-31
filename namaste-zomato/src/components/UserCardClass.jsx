import React from "react";
import githubData from "../utils/githubData";
import { Link } from "react-router-dom";
class UserCardClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "abc",
        avatar_url: "",
        bio: "xyz",
        twitter_username: "xyz",
        followers: 0,
        following: 0,
        public_repos: 0,
      },
    };
  }

  async componentDidMount() {
    // const res = await fetch("https://api.github.com/users/Mriganka5137");

    // const data = await res.json();

    this.setState({
      userInfo: githubData,
    });
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
        className="flex justify-between max-w-xl px-10 py-8 mt-5 border border-green-100 rounded-lg shadow-md hover:shadow-lg"
      >
        <div>
          <h2 className="text-xl font-semibold text-gray-600 ">{name}</h2>
          <h3 className="text-sm text-gray-400">Location : {location}</h3>
          <h2 className="mt-5 text-gray-500">twitter: {twitter_username}</h2>
          <p className="max-w-md mt-2 text-xs text-gray-400">{bio}</p>
          <div className="flex gap-5 mt-5 font-semibold text-gray-500">
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
