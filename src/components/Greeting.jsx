const Greeting = ({timeOfDay}) => {
  return timeOfDay === "morning"
    ? "Good morning!"
    : timeOfDay === "afternoon"
    ? "Good afternoon!"
    : "Hello!";
};

export default Greeting;
