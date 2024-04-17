import React, { useEffect, useState } from "react";
import Users from "../Components/Users";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCreateDocument } from "../features/document/documentSlice";
import { toast } from "react-toastify";

const Form = () => {
  const { user, logout } = useAuth0();
  const { users, isSuccess, isLoadings, isError, message } = useSelector(
    (state) => state.auth2
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // data

  const [formData, setFormData] = useState({
    name: user?.name || users?.name,
    email: user?.email || users?.email,
    query: "",
  });

  // Destructure State
  const { name, email, query } = formData;
  // Form State Logic
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (name && email && query) {
      dispatch(getCreateDocument(formData));
      toast.success("Data saved");
      navigate("/Users");
      window.location.reload();
    } else {
      toast.error("fill all details");
    }
  };

  return (
    <div class="p-2 col-span-8 md:col-span-4 w-full mt-5">
      <div class="grid grid-cols-2 gap-x-8 gap-y-10">
        <div class="col-span-2 sm:col-span-1">
          <label
            for="first-name"
            class="block text-sm font-medium leading-6 text-white">
            Name
          </label>
          <div class="mt-2">
            <input
              disabled
              type="text"
              name="name"
              id="Name"
              placeholder="Shabbar khan"
              value={user?.name || users?.name}
              autocomplete="given-name"
              class="block w-full rounded-md border-0 py-1.5 px-3 text-silver-400  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div class="col-span-2 sm:col-span-1">
          <label
            for="last-name"
            class="block text-sm font-medium leading-6 text-white">
            Gmail
          </label>
          <div class="mt-2">
            <input
              disabled
              type="gmail"
              name="Gmail"
              id="Gmail"
              placeholder="emample@gmail.com"
              autocomplete="family-name"
              value={user?.email || users?.email}
              class="block w-full rounded-md border-0 py-1.5 px-3  text-silver-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div class="col-span-2">
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-white">
            Your Query
          </label>
          <div class="mt-2">
            <input
              id="Message"
              type="text"
              name="query"
              value={query}
              onChange={handleChange}
              class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-white h-10 px-4 py-2 duration-200">
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Save
        </button>
      </div>
     
    </div>
  );
};

export default Form;
