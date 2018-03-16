import { all, takeLatest } from 'redux-saga/effects';

import { Types as MapTypes } from 'store/ducks/map';
import { Types as UserTypes } from 'store/ducks/user';
import { getCoordinatesRequest } from './map';
import { getGithubUserRequest } from './user';

export default function* rootSaga() {
  return yield all([
    takeLatest(MapTypes.GET_COORDINATES, getCoordinatesRequest),
    takeLatest(UserTypes.GET_GITHUB_USER, getGithubUserRequest),
  ]);
}
