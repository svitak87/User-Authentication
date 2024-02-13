export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";
export const USER_LOGIN = "USER_LOGIN";

export const registerUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.status === 409) {
        throw new Error("User already exists");
      }

      const data = await response.json();
      dispatch({ type: REGISTER_USER, payload: data });
    } catch (error) {
      dispatch({ type: REGISTER_USER_ERROR, payload: error.message });
    }
  };
};

 export const loginUser = (credentialData) => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentialData),
      });
      if (response.status === 403) {
        throw Error("Incorrect credentials");
      }
      const data = await response.json();
      dispatch({ type: USER_LOGIN, payload: data });
    } catch (error) {
      throw error;
    }
  };
};
