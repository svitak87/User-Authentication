export const REGISTER_USER = "REGISTER_USER";


export const registerUser = (userData) => {
  return function (dispatch) {
    return fetch("http://localhost:3001/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => dispatch({ type: REGISTER_USER, payload: data }));
  };
};
