import React from "react";
import Users from "../Components/Users";
import { useAuth0 } from "@auth0/auth0-react";

const Form = () => {
  const { user } = useAuth0();

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
              name="Name"
              id="Name"
              placeholder="Shabbar khan"
              value={user?.name}
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
              value={user?.email}
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
              name="Message"
              type="text"
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
          type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Save
        </button>
      </div>
      <div id="last-users">
        <h1 class="font-bold py-4 mt-10 uppercase">Last 24h users</h1>
        <div class="overflow-x-scroll">
          <table class="w-full whitespace-nowrap">
            <thead class="bg-black/60 w-full">
              <th class="text-left py-3 px-2 rounded-l-lg">Name</th>
              <th class="text-left py-3 px-2">Email</th>
              <th class="text-left py-3 px-2 w-80">message</th>
              <th class="text-left py-3 px-2 rounded-r-lg">Actions</th>
            </thead>
            <Users />
          </table>
        </div>
      </div>
    </div>
  );
};

export default Form;
