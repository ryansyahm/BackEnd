import {
  API_USER_FAILED,
  API_USER_START,
  API_USER_SUCCESS,
  LOGIN,
  LOGOUT,
} from "../types";

const INITIAL_STATE = {
  id: 0,
  username: "",
  email: "",
  alamat: "",
  roleID: 0,
  verified: 0,
  loading: false,
  error: "",
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case API_USER_START:
      return {
        ...state,
        loading: true,
      };
    case API_USER_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case API_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case LOGIN:
      return {
        ...state,
        ...action.payload,
      };
    case LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
