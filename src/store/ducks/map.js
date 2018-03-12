export const Types = {
  GET_COORDINATES: 'map/GET_COORDINATES',
};

const initialState = {
  isLoading: false,
  modalVisible: true,
  region: {
    latitude: -27.2177659,
    longitude: -49.6451598,
    latitudeDelta: 0.0042,
    longitudeDelta: 0.0031,
  },
};


export default function map(state = initialState, action) {
  switch (action.type) {
    case Types.GET_COORDINATES:
      return {
        ...state,
        isLoading: true,
      };
    default: return state;
  }
}

// Actions
export const Creators = {
  getInitialCoordinates: region => ({
    type: Types.GET_COORDINATES,
    payload: {
      region,
    },
  }),
};
