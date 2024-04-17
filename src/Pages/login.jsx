import React, { useEffect, useState } from "react";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin, loginUser } from "../features/Auth/authSlice";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setshowpassword] = useState(false);
  const show = () => {
    setshowpassword(!showPassword);
  };
  const { users, isSuccess, isLoadings, isError, message } = useSelector(
    (state) => state.auth2
  );
  const { loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const AdminExist = JSON.parse(localStorage.getItem("admin"));
console.log(AdminExist)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const GORegister = () => {
    navigate("/register");
    window.location.reload();
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(formData);

  const Submit = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "admin") {
      dispatch(loginAdmin(email));
      navigate("/dashboard");
    } else {
      console.log("Login SuccessFully");
      dispatch(loginUser(formData));
      setFormData({
        email: "",
        password: "",
      });
    }
  };
  useEffect(() => {
    if (users || user) {
      navigate("/Userdashboard");
    }
    if (AdminExist) {
      navigate("/dashboard");
    }
  }, [user, users, AdminExist]);
  useEffect(() => {
    if (isError || message) {
      toast.error(message);
    }
    if (isLoading || isLoadings) {
      <h1>Loading......</h1>;
    }
  }, [isError, message, isLoadings, isLoading]);

  console.log(user);

  useEffect(() => {
    if (user || users) {
      navigate("/Userdashboard");
    }
    if (isLoadings) {
      <h1>loading.....</h1>;
    }
  }, [user, isLoadings]);

  return (
    <div class="bg-black text-white flex w-full min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
      <a href="#">
        <div class="text-foreground font-semibold text-2xl tracking-tighter mx-auto flex items-center gap-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
              />
            </svg>
          </div>
          Eskills Web
        </div>
      </a>
      <div class="relative mt-12 w-full max-w-lg sm:mt-10">
        <div
          class="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"
          bis_skin_checked="1"></div>
        <div class="mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
          <div class="flex flex-col p-6">
            <h3 class="text-xl font-semibold leading-6 tracking-tighter">
              Login
            </h3>
            <p class="mt-1.5 text-sm font-medium text-white/50">
              Welcome back, enter your credentials to continue.
            </p>
          </div>
          <div class="p-6 pt-0">
            <form>
              <div>
                <div>
                  <div class="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                    <div class="flex justify-between">
                      <label class="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                        Email
                      </label>
                      <div class="absolute right-3 translate-y-2 text-green-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="w-6 h-6">
                          <path
                            fill-rule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <input
                      type="text"
                      name="email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      value={email}
                      required
                      onChange={handleChange}
                      autocomplete="off"
                      class="block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
                    />
                  </div>
                </div>
              </div>
              <div class="mt-4">
                <div>
                  <div class="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                    <div class="flex justify-between">
                      <label class="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                        Password
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        type={showPassword ? "text" : "password"}
                        onChange={handleChange}
                        value={password}
                        required
                        name="password"
                        class="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                      />{" "}
                      <i
                        onClick={show}
                        class={
                          showPassword
                            ? "fa-solid fa-eye"
                            : "fa-solid fa-eye-slash"
                        }></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-4 flex items-center justify-between">
                <label class="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="remember"
                    class="outline-none focus:outline focus:outline-sky-300"
                  />
                  <span class="text-xs">Remember me</span>
                </label>
                <a
                  class="text-sm font-medium text-foreground underline"
                  href="/forgot-password">
                  Forgot password?
                </a>
              </div>
              <div class="mt-4 flex items-center justify-end gap-x-2">
                <GoogleButton onClick={() => loginWithRedirect()} />
                <button
                  onClick={GORegister}
                  class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-white h-10 px-4 py-2 duration-200">
                  Register
                </button>
                <button
                  onClick={Submit}
                  class="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
                  type="submit">
                  <a>Login</a>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
