import { all, takeLatest } from 'redux-saga/effects';

import { Types as MapTypes } from 'store/ducks/map';
import { getCoordinatesRequest, getGithubUserRequest } from './map';

export default function* rootSaga() {
  return yield all([
    takeLatest(MapTypes.GET_COORDINATES, getCoordinatesRequest),
    takeLatest(MapTypes.GET_GITHUB_USER, getGithubUserRequest),
  ]);
}
