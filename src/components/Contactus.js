import React, { useState } from "react";

const Contactus = () => {
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", "433e2618-24df-4ae5-af93-650d490983ed");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatusMessage("✅ Message sent successfully!");
        e.target.reset();
      } else {
        setStatusMessage("❌ Failed to send message. Please try again.");
      }
    } catch {
      setStatusMessage("⚠️ An error occurred. Please try again later.");
    }
  };

  return (
    <section className="text-gray-800 bg-white body-font" id="contact">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-white rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative shadow-md">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112049.1610452443!2d77.0112188!3d28.6436845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04f0c140ca91%3A0x80899ba93bb3a00c!2sWest%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1720185866093!5m2!1sen!2sin"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(1)" }}
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md w-full">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-orange-600 text-xs">ADDRESS</h2>
              <p className="mt-1">West Delhi, New Delhi, Delhi, India 110015</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-orange-600 text-xs">EMAIL</h2>
              <a className="text-orange-500 hover:underline" href="mailto:rahulbhatia775@gmail.com">
                rahulbhatia775@gmail.com
              </a>
              <h2 className="title-font font-semibold text-orange-600 text-xs mt-4">PHONE</h2>
              <p>+91 88608 88768</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 md:w-1/2 w-full md:ml-auto mt-8 md:mt-0">
          <form onSubmit={handleSubmit}>
            <h2 className="text-orange-600 text-lg mb-1 font-semibold">Reach me!</h2>
            <p className="mb-5 text-sm text-gray-600">💬 I'd love to hear your thoughts or suggestions!</p>

            <div className="mb-4">
              <label htmlFor="name" className="text-sm text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-white border border-orange-300 rounded py-2 px-4 text-gray-800 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="text-sm text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-white border border-orange-300 rounded py-2 px-4 text-gray-800 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="text-sm text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full bg-white border border-orange-300 rounded py-2 px-4 h-32 text-gray-800 resize-none focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-full text-lg transition duration-300"
            >
              Send
            </button>

            {statusMessage && (
              <p className="text-sm mt-3 text-orange-700 font-medium">{statusMessage}</p>
            )}
          </form>

          <p className="text-xs text-gray-500 mt-6">
            The content presented on this website reflects my personal learning, experiences, and projects. All information is provided “as is” without warranties.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
