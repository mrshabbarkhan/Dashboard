import React from "react";
import { useDispatch, useSelector } from "react-redux";
import img from "../assets/Avatar.png";
import { useAuth0 } from "@auth0/auth0-react";

const Allusers = () => {
  const { users } = useSelector((state) => state.auth2);
  const { documents } = useSelector((state) => state.document);
  const { user } = useAuth0();
  const dispatch = useDispatch();

//   const remove = (id) => {
//     console.log(id);
//     dispatch(getDeleteDocument(id));
//     window.location.reload();
//   };
//   console.log(documents);
//   useEffect(() => {
//     dispatch(getAllDocuments());
//   }, []);
//   useEffect(() => {
//     dispatch(getAllDocuments());
//   }, [documents]);

  return (
    <>
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
            {documents?.map((users) => (
              <tr class="border-b border-gray-700">
                <td class="py-3 px-2 font-bold">
                  <div class="inline-flex space-x-3 items-center">
                    <span>
                      <img
                        class="rounded-full w-8 h-8"
                        src={user?.picture || img}
                      />
                    </span>
                    <span>{users?.name}</span>
                  </div>
                </td>
                <td class="py-3 px-2">{users?.email}</td>
                <td class="py-3 px-2">{users?.query}</td>
                <td class="py-3 px-2">
                  <div class="inline-flex items-end space-x-2">
                    <a href="" title="Edit" class="hover:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                    </a>

                    <a
                      onClick={() => remove(users?._id)}
                      title="delete user"
                      class="hover:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                        />
                      </svg>
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default Allusers;
