import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginProcess } from "../../redux/UserDuck";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  /*  const selector = useSelector(); */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    dispatch(loginProcess(user, navigate));
  };
  const handleChange = (e) => {
    console.log("si lo usamos");
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <section>
      <h3>Es un login</h3>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={handleChange} />
        <button type="submit">mandala ya!!</button>
      </form>
    </section>
  );
};

export default Auth;
