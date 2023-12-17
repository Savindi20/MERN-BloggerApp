import React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";

function Contact() {
  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-10">
        <div className="container mx-auto px-4">
          <div className="heading text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              I'm Very Responsive to Messages
            </h1>
          </div>
          <div className="flex flex-col md:flex-row mt-8 gap-x-12 px-16">
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Contact;