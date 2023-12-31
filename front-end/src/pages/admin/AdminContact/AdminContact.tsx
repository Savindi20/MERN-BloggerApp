import React from "react";
import AdminLayout from "../AdminLayout";

function AdminContact() {
  return (
    <AdminLayout>
      <section className="container mx-auto px-5 py-10">
        <div className="container mx-auto px-4">
          <div className="heading text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              I'm Very Responsive to Messages
            </h1>
          </div>
          <div className="flex flex-col md:flex-row mt-8 gap-x-12 px-16">
            
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <iframe
                className="map h-80 md:h-96 w-full rounded-2xl md:mt-4 shadow-2xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.688024656764!2d80.20269457657423!3d6.0374788783437445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1739679cea25b%3A0x4edf49e4cc9048a0!2sIJSE%20-%20Institute%20of%20Software%20Engineering%20(Galle%20Branch)!5e0!3m2!1sen!2slk!4v1687619786267!5m2!1sen!2slk"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>

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
    </AdminLayout>
  );
}

export default AdminContact;
