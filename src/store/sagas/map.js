import { call, put } from 'redux-saga/effects'; // promise
import api from 'services/api';
// import api from 'services/api';

// import { addFavoriteSuccess, addFavoriteError } from 'store/ducks/favorites';
import { Creators as MapActions } from 'store/ducks/map';

export function* getCoordinatesRequest(action) {
  try {
    console.tron.log('saga', action);
    yield put(MapActions.getInitialCoordinates(action));

    // if (favorites.find(favorite => favorite.id === response.data.id)) {
    //   yield put(MapActions.addFavoriteError('Repositório duplicado'));
    // } else {
    //   yield put(MapActions.addFavoriteSuccess(response.data));
    // }
  } catch (err) {
    // yield put(MapActions.addFavoriteError('Repositório não existe'));
  }
}

export function* getGithubUserRequest(action) {
  try {
    const response = yield call(api.get, `/users/${action.payload.searchUser}`);
    console.tron.log(response.data);
    yield put(MapActions.getGithubUserSuccess(response.data));
  } catch (err) {
    console.tron.log('saga err', err);
  }
}
