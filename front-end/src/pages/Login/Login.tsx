import React from "react";
import MainLayout from "../../components/MainLayout";
import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import axios from "../../axios";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const userLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let loginDetail = {
      email: email,
      password: password,
    };

    axios
    .post("user/sign-in", loginDetail)
    .then((res) => {
      // setUserId(res.data.responseData.id); // Store the user ID in state
      localStorage.setItem("id", res.data.responseData.id); // Store userId in localStorage
      navigate(`/admin`); // Navigate to user details page
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Log in Successful..!",
        showConfirmButton: false,
        timer: 1500,
      });
      // toast.success('Log in Successfully..!');
    })
    .catch((err) => {
      console.log(err);
        Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Something Went Wrong..!",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-10 font-opensans">
        <div className="w-full max-w-sm mx-auto">
          <h1 className="font-roboto text-2xl font-bold text-center text-dark-hard mb-8">
            Login
          </h1>
          <form onSubmit={userLogin}>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="email"
                className="text-[#5a7184] font-semibold block"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                name="email"
                onChange={handleInputChange}
                pattern="^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$"
                required
                className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border`}
              />
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="password"
                className="text-[#5a7184] font-semibold block"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                name="password"
                onChange={handleInputChange}
                pattern=".{6,}"
                required
                className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border`}
              />
            </div>
            <Link to="" className="text-sm font-semibold text-purple-900">
              Forgot password?
            </Link>
            <button
              type="submit"
              disabled={false}
              className="bg-blue-600 text-white font-bold text-lg py-4 px-8 w-full rounded-lg my-6 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              Sign In
            </button>
            <p className="text-sm font-semibold text-[#5a7184]">
              Do not have an account?{" "}
              <Link to="/register" className="text-purple-900">
                Register now
              </Link>
            </p>
          </form>
        </div>
      </section>
    </MainLayout>
  );
}

export default Login;