export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";

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
        // Si el usuario ya existe, lanzamos un nuevo error
        throw new Error("User already exists");
      }

      if (!response.ok) {
        // Si hay otro error de servidor, lanzamos un error genérico
        throw new Error("Failed to register user");
      }

      const data = await response.json();
      dispatch({ type: REGISTER_USER, payload: data });
    } catch (error) {
      // Manejamos los errores aquí
      dispatch({ type: REGISTER_USER_ERROR, payload: error.message });
    }
  };
};
