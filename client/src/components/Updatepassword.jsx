import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import validate from "./validation";
import { updatePassword } from "../redux/actions";

const Updatepassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userPassword, setUserPassword] = useState({
    password: "",
    passwordTwo: "",
  });

  const [errors, setErrors] = useState({ password: "", passwordTwo: "" });
  const [access, setAccess] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserPassword({ ...userPassword, [name]: value });

    const validationErrors = validate({ ...userPassword, [name]: value });
    setErrors(validationErrors);
  };
  const submitForm = async (event) => {
    event.preventDefault();
    if (userPassword.password === userPassword.passwordTwo) {
      await dispatch(updatePassword(userPassword))
        .then(() => {
          setAccess(true);
          setTimeout(() => {
            useNavigate("/login");
          }, 4000);
        })
        .catch((error) => {
          if (error.message === "The passwords don't match") {
            setAccess(false);
            setLoginError("The passwords don't match");
            setTimeout(() => {
              setUserPassword({
                ...userPassword,
                password: "",
                passwordTwo: "",
              });
            }, 4000);
          }
        });
    }
  };
  return (
    <div>
      <h1>Update your password</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="password">New password:</label>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            value={userPassword.password}
            onChange={handleChange}
            autoComplete="off"
            required
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <label htmlFor="password">Confirm password:</label>
        <div>
          <input
            type="password"
            name="passwordTwo"
            id="passwordTwo"
            value={userPassword.passwordTwo}
            onChange={handleChange}
            autoComplete="off"
            required
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
      {loginError && <p>{loginError}</p>}
    </div>
  );
};

export default Updatepassword;
