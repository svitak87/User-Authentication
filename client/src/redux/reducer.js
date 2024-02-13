import { REGISTER_USER, REGISTER_USER_ERROR } from "./actions";

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
    case REGISTER_USER_ERROR:
      return {
        ...state,
        error: payload, // Establecemos el error recibido del servidor
      };
    default:
      return state;
  }
};

export default rootReducer;
