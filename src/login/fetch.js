import Bluebird from 'bluebird';
import config from '../lib/config';

const baseHeader = () => {
  const myHeader = new Headers();
  myHeader.append('content-type', 'application/json');
  myHeader.append('pragma', 'no-cache');
  myHeader.append('cache-control', 'no-cache');
  return myHeader;
};
export const loginUser = Bluebird.coroutine(function* generator(Username, Password) {
  const headers = baseHeader();
  const response = yield fetch(`${config.API}/login`, {
    method: 'Post',
    headers,
    body: JSON.stringify({ Username, Password })
  });
  if (response.status === 200) {
    const role = response.text();
    return role;
  }
  return 'failed';
});
