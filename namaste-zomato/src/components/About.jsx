import UserCard from "./UserCard";
import UserCardClass from "./UserCardClass";

const About = () => {
  return (
    <div className="px-10 py-5 pt-36">
      <h1 className="mb-3 text-2xl font-semibold">About us</h1>
      <hr />
      <UserCard />
      <UserCardClass
        name="Mriganka Mousum Gogoi - class"
        location="Khumtai, Golghat"
      />
    </div>
  );
};

export default About;
