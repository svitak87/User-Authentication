import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import validate from "./validation";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const [userData, setUserData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });

    const validationErrors = validate({ ...userData, [name]: value });
    setErrors(validationErrors);
  };

  const submitForm = (event) => {
    event.preventDefault();
    dispatch(registerUser(userData)).then(() => {
      navigate("/login"); 
    });
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
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
