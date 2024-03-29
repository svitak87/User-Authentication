import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Register from "./components/Register";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import Recoverpassword from "./components/Recoverpassword";
import Updatepassword from "./components/Updatepassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/recover" element={<Recoverpassword />} />
        <Route path="/updatepass" element={<Updatepassword />} />
      </Routes>
    </>
  );
}

export default App;
