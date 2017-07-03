import { LOGIN_ACTION, INPUT_USER, INPUT_PASSWORD } from './constants';

export function inputUser(username) {
  return {
    type: INPUT_USER,
    username,
  };
}

export function inputPassword(password) {
  return {
    type: INPUT_PASSWORD,
    password,
  };
}

export function handeLogin(router) {
  return {
    type: LOGIN_ACTION,
    router
  };
}
