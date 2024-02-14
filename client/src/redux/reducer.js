import { REGISTER_USER, USER_LOGIN, RECOVER_PASSWORD, UPDATE_PASSWORD } from "./actions";

const initialState = {
  users: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
      return {
        ...state,
        users: payload,
      };
    case USER_LOGIN:
      return {
        ...state,
        users: payload,
      };
    case RECOVER_PASSWORD:
      return {
        ...state,
        users: payload,
      };
      case UPDATE_PASSWORD:
        return {
          ...state,
          users:payload,
        }
    default:
      return state;
  }
};

export default rootReducer;
