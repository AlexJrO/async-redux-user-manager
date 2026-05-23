import { connect } from "react-redux";

import UserListScreen
from "../components/UserListScreen";

import {
  fetchUsers,
  deleteUser
} from "../redux/actions";


const mapStateToProps = (state) => ({
  users: state.users,
  loading: state.loading,
  error: state.error
});

const mapDispatchToProps = {
  fetchUsers,
  deleteUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListScreen);