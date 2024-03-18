import React from "react";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="box bg-black h-screen flex justify-center items-center">
      <div class=" w-1/3 mx-auto bg-black p-8 rounded-md shadow-md form-container">
        <h2 class="text-2xl font-semibold text-white mb-6">Say Something!</h2>
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
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="How can we help you?"
              required
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"></textarea>
          </div>
          <button
            type="submit"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Send
          </button>
          <p class="mt-2 text-gray-300">If You are a admin login here</p>
          <Link
            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            to={"/login"}
            target="blank">
            Login here
          </Link>
        </form>
      </div>
    </div>
  );
};

export default User;
