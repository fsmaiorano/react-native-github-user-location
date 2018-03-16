export const Types = {
  GET_GITHUB_USER: 'user/GET_GITHUB_USER',
  GET_GITHUB_USER_SUCCESS: 'user/GET_GITHUB_USER_SUCCESS',
  GET_GITHUB_USER_ERROR: 'user/GET_GITHUB_USER_ERROR',
};

const initialState = {

};

export default function user(state = initialState, action) {
  switch (action.type) {
    case Types.GET_GITHUB_USER:
      return {
        ...state,
        searchUser: action.payload.searchUser,
      };
    case Types.GET_GITHUB_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.userSuccess,
      };
    default: return state;
  }
}

// Actions
export const Creators = {
  getGithubUserRequest: searchUser => ({
    type: Types.GET_GITHUB_USER,
    payload: {
      searchUser,
    },
  }),

  getGithubUserSuccess: userSuccess => ({
    type: Types.GET_GITHUB_USER_SUCCESS,
    payload: {
      userSuccess,
    },
  }),

  getGithubUserError: message => ({
    type: Types.GET_GITHUB_USER_ERROR,
    payload: {
      message,
    },
  }),
};
