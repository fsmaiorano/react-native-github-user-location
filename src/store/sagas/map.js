import { call, put, select } from 'redux-saga/effects'; // promise
import api from 'services/api';
import { Creators as MapActions } from 'store/ducks/map';

export function* getCoordinatesRequest(action) {
  try {
    console.tron.log('saga', action);
    yield put(MapActions.getInitialCoordinates(action));
  } catch (err) {
    console.tron.log('saga err', err);
  }
}

export function* getGithubUserRequest(action) {
  try {
    const response = yield call(api.get, `/users/${action.payload.searchUser}`);
    yield put(MapActions.getGithubUserSuccess(response.data));
  } catch (err) {
    console.tron.log('saga err', err);
  }
}
