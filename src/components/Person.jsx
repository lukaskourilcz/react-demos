import PropTypes from "prop-types";

const Person = () => {
  return <User name="Lukas Kouril" age={31} />;
};

const User = ({ name, age }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default Person;
