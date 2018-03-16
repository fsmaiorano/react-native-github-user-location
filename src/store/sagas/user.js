import { call, put } from 'redux-saga/effects'; // promise
import api from 'services/api';
import { Creators as UserActions } from 'store/ducks/user';

export function* getGithubUserRequest(action) {
  try {
    const response = yield call(api.get, `/users/${action.payload.searchUser}`);
    yield put(UserActions.getGithubUserSuccess(response.data));
  } catch (err) {
    console.tron.log('saga err', err);
  }
}
