import React from "react";
import MainLayout from "../../components/MainLayout";
import { Link } from "react-router-dom";

const Login = () => {

  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-10 font-opensans">
        <div className="w-full max-w-sm mx-auto">
          <h1 className="font-roboto text-2xl font-bold text-center text-dark-hard mb-8">
            Login
          </h1>
          <form>
            <Link to="" className="text-sm font-semibold text-primary">
              Forgot password?
            </Link>
            <button
              type="submit"
              disabled={false}
              className="bg-purple-600 text-white font-bold text-lg py-4 px-8 w-full rounded-lg my-6 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              Sign In
            </button>
            <p className="text-sm font-semibold text-[#5a7184]">
              Do not have an account?{" "}
              <Link to="/register" className="text-primary">
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