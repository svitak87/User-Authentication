import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import validate from "./validation";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const [userData, setUserData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    passwordTwo: ""
  });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [passwordValidation , setPasswordValidation] = useState("");
  const [registrationError, setRegistrationError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });

    const validationErrors = validate({ ...userData, [name]: value });
    setErrors(validationErrors);
  };

  const submitForm = async (event) => {
    event.preventDefault();
    if (userData.password === userData.passwordTwo) {
      try {
        await dispatch(registerUser(userData));
        navigate("/login");
      } catch (error) {
        if (error.message === "User already exists") {
          // Si el usuario ya existe, mostramos el mensaje correspondiente
          setRegistrationError("User already exists");
        } else {
          // Si hay otro error, mostramos un mensaje genérico
          console.error("Registration error:", error);
          setRegistrationError("Failed to register user");
        }
      }
    } else {
      setPasswordValidation("Passwords do not match");
      setTimeout(() => {
        setUserData({ ...userData, password: "", passwordTwo: "" });
      }, 3000);
    }
  };
  
  return (
    <div>
      <h2>Register Now!</h2>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={userData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastname">Lastname:</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={userData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            name="password"
            id="password"
            value={userData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div>
          <label htmlFor="password">Confirm password:</label>
          <input
            type="text"
            name="passwordTwo"
            id="passwordTwo"
            value={userData.passwordTwo}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {passwordValidation && <p>{passwordValidation}</p>}
      {registrationError && <p>{registrationError}</p>}
      <p>¿Already registered?</p>
      <Link to="/login">
        <p>Login clicking here!</p>
      </Link>
    </div>
  );
};

export default Register;
