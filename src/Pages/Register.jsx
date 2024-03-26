import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/Auth/authSlice";
import { toast } from "react-toastify";

const Register = () => {
  // Getting Data From Auth State
  const { users, isSuccess, isLoadings, isError, message } = useSelector(
    (state) => state.auth2
  );

  // Intializing Hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Destructure State
  const { name, email, password } = formData;

  // Form State Logic
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (isError || message) {
      toast.error(message);
    } else {
      dispatch(registerUser(formData));
      navigate("/");
    }
  };

  useEffect(() => {
    if (users || isSuccess) {
      navigate("/UserDashboard");
    }
    if (isError && message) {
      toast.error(message);
    }
  }, [users, isSuccess, isError, message]);

  return (
    <div className="box bg-black h-screen flex justify-center items-center w-full">
      <div class="w-full md:w-1/3 mx-auto bg-black p-8 rounded-md shadow-md form-container">
        <h2 class="text-2xl font-semibold text-white mb-6">Register Here!!!</h2>
        <form>
          <div class="mb-4">
            <label
              for="name"
              class="block text-gray-300 text-sm font-bold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              onChange={handleChange}
              value={name}
              name="name"
              placeholder="Shabbar"
              required
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
            />
          </div>
          <div class="mb-4">
            <label
              for="email"
              class="block text-gray-300 text-sm font-bold mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              onChange={handleChange}
              value={email}
              name="email"
              placeholder="EskillsWeb@gmail.com"
              required
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
            />
          </div>
          <div class="mb-6">
            <label
              for="message"
              class="block text-gray-300 text-sm font-bold mb-2">
              Your Password
            </label>
            <input
              type="password"
              id="password"
              onChange={handleChange}
              value={password}
              name="password"
              placeholder="Enter your password"
              required
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"></input>
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Send
          </button>
          <p class="mt-2 text-gray-300">If You are a admin login here</p>
          <Link
            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            to={"/"}>
            Login here
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
