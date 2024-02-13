import { REGISTER_USER, REGISTER_USER_ERROR, USER_LOGIN } from "./actions";

const initialState = {
  users: [],
  error: null,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
      return {
        ...state,
        users: payload,
        error: null,
      };
      case USER_LOGIN:
        return {
          ...state,
          users:payload
        }
    case REGISTER_USER_ERROR:
      return {
        ...state,
        error: payload, 
      };
    default:
      return state;
  }
};

export default rootReducer;
