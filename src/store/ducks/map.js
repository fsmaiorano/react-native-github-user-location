export const Types = {
  GET_COORDINATES: 'map/GET_COORDINATES',
  GET_GITHUB_USER: 'map/GET_GITHUB_USER',
  GET_GITHUB_USER_SUCCESS: 'map/GET_GITHUB_USER_SUCCESS',
};

const initialState = {
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
    case Types.GET_GITHUB_USER:
      return {
        ...state,
        searchUser: action.payload.searchUser,
      };
    case Types.GET_GITHUB_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
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

  getGithubUser: searchUser => ({
    type: Types.GET_GITHUB_USER,
    payload: {
      searchUser,
    },
  }),

  getGithubUserSuccess: user => ({
    type: Types.GET_GITHUB_USER_SUCCESS,
    payload: {
      user,
    },
  }),
};
