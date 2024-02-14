export const REGISTER_USER = "REGISTER_USER";
export const USER_LOGIN = "USER_LOGIN";
export const RECOVER_PASSWORD = "RECOVER_PASSWORD";
export const UPDATE_PASSWORD = "UPDATE_PASSWORD";

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
        throw new Error("User already exists!");
      }

      const data = await response.json();
      dispatch({ type: REGISTER_USER, payload: data });
    } catch (error) {
      throw error;
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

export const recoverPassword = (credentialData) => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/users/recover", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentialData),
      });

      if (response.status === 400) {
        throw Error("Incorrect answers");
      }

      const data = await response.json();
      dispatch({ type: RECOVER_PASSWORD, payload: data });
    } catch (error) {
      throw error;
    }
  };
};

export const updatePassword = (userPassword) => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/users/recover", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentialData),
      });
      if (response.status === 403) {
        throw Error("The passwords don't match");
      }
      const data = await response.json();
      dispatch({ type: UPDATE_PASSWORD, payload: data });
    } catch (error) {
      throw error;
    }
  };
};
