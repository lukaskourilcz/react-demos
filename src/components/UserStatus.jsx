import PropTypes from 'prop-types';

const UserStatus = (props) => {
  if (props.loggedIn && props.isAdmin) {
    return <h2>Welcome Admin!</h2>;
  } else {
    return <h2>Welcome User!</h2>;
  }
};

UserStatus.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
};

export default UserStatus;
