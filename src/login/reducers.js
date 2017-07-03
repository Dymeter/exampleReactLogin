import { LOGIN_ACTION, INPUT_USER, INPUT_PASSWORD } from './constants';
import { loginUser } from './fetch';

const defaultState = {
  username: '',
  password: ''
};

export function loginReducer(state = defaultState, action) {
  switch (action.type) {
    case LOGIN_ACTION:
      loginUser(state.selectedUser, state.password).then((role) => {
        if (role !== 'failed') {
          action.router.push('/app');
        }
      });
      return {
        ...state,
        password: ''
      };
    case INPUT_PASSWORD:
      return {
        ...state,
        password: action.password
      };
    case INPUT_USER:
      return {
        ...state,
        username: action.username
      };
    default:
      return state;
  }
}


export default loginReducer;
