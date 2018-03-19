export const Types = {
  GET_COORDINATES: 'map/GET_COORDINATES',
  GET_GITHUB_USER: 'users/GET_GITHUB_USER',
  GET_GITHUB_USER_SUCCESS: 'users/GET_GITHUB_USER_SUCCESS',
  GET_GITHUB_USER_ERROR: 'users/GET_GITHUB_USER_ERROR',
};

const initialState = {
  region: {
    latitude: -27.2177659,
    longitude: -49.6451598,
    latitudeDelta: 0.0042,
    longitudeDelta: 0.0031,
  },
  users: [],
};

export default function map(state = initialState, action) {
  switch (action.type) {
    case Types.GET_COORDINATES:
      return {
        ...state,
      };
    case Types.GET_GITHUB_USER:
      return {
        ...state,
        searchUser: action.payload.searchUser,
      };
    case Types.GET_GITHUB_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload.user],
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

  getGithubUserRequest: (searchUser, coordinate) => ({
    type: Types.GET_GITHUB_USER,
    payload: {
      searchUser,
      coordinate,
    },
  }),

  getGithubUserSuccess: user => ({
    type: Types.GET_GITHUB_USER_SUCCESS,
    payload: {
      user,
    },
  }),

  getGithubUserError: message => ({
    type: Types.GET_GITHUB_USER_ERROR,
    payload: {
      message,
    },
  }),
};
