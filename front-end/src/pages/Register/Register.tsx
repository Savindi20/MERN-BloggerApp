import { ChangeEvent } from "react";
import MainLayout from "../../components/MainLayout";

function Register() {

  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-10 font-opensans">
        <div className="w-full max-w-sm mx-auto">
          <h1 className="font-roboto text-2xl font-bold text-center text-dark-hard mb-8">
            Sign Up
          </h1>
        </div>
      </section>
    </MainLayout>
  );
}

export default Register;