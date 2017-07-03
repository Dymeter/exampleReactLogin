import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import Login from './components';

function mapStateToProps(state) {
  const { selectedUser, usersList, password } = state.login;
  return {
    usersList,
    selectedUser,
    password
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Login);

export default App;
