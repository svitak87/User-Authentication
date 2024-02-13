import { REGISTER_USER } from "./actions";

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
    default:
      return state
  }
};

export default rootReducer;
