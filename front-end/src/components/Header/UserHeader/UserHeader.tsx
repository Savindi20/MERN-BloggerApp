import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function UserHeader() {
  const navIsVisible = useState(false);
  const navigate = useNavigate();

  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-white">
      <header
        className="container mt-4 mx-auto mb-14 px-5 flex justify-center py-4 items-center"
        style={{
          boxShadow:
            " rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
          borderRadius: "15px",
        }}
      >
        <div className="flex items-center">
          {" "}
          {/* Add flex and items-center classes */}
          {/* <img className="w-16" src="" alt="logo" /> */}
        </div>
        <div
          className={`${
            navIsVisible ? "right-0" : "-right-full "
          } transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
        >
          <button
            onClick={() => navigate("/")}
            className="mt-5 lg:mt-0 font-Ubuntu border-2 border-purple-600 px-6 py-2 rounded-full text-purple-600 font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 text-center"
          >
            Log Out
          </button>
        </div>
      </header>
    </section>
  );
}

export default UserHeader;