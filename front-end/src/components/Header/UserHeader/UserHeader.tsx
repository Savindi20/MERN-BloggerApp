import React from "react";

function UserHeader() {
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
      </header>
    </section>
  );
}

export default UserHeader;