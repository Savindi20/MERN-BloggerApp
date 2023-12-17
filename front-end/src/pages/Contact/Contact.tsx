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

            <form className="w-full md:w-1/2">
              <h1 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-400">
                Get in Touch
              </h1>
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded-2xl py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 shadow-sm"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded-2xl py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 shadow-sm"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded-2xl py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 shadow-sm"
                />
              </div>
              <div className="mb-4">
                <textarea
                  id="message"
                  placeholder="Your Message"
                  className="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded-2xl py-2 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 shadow-sm"
                  cols={30}
                  rows={5}
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={false}
                  className="btn bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 w-full shadow-sm"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Contact;