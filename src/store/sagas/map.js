import { put } from 'redux-saga/effects'; // promise
import { Creators as MapActions } from 'store/ducks/map';

export function* getCoordinatesRequest(action) {
  try {
    console.tron.log('saga', action);
    yield put(MapActions.getInitialCoordinates(action));
  } catch (err) {
    console.tron.log('saga err', err);
  }
}
