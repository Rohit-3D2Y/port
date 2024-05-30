import React, { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { MdEmail } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import lottie from 'lottie-web';
import animationData1 from "../assets/animation2.json";

const LottieAnimation = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animationData1,
      loop: true,
      autoplay: true,
    });

    return () => {
      anim.destroy(); // Cleanup function to destroy the animation instance when component unmounts
    };
  }, []);

  return <div ref={animationContainer} className="w-full h-full"></div>;
};

function ContactForm() {
  const [state, handleSubmit] = useForm("xqkrorbl");

  if (state.succeeded) {
    return <p className="text-center text-green-500 font-semibold">Thanks for reaching out!</p>;
  }

  return (
    <>
    <div className="text-center text-[8vw] font-[Oswald] flex items-center justify-center gap-1 md:text-[3vw] mb-4 md:text-center mt-12">
    <h1>Contact Me</h1>
    <img
      src="https://www.svgrepo.com/show/530412/user.svg"
      className="h-[8vw] w-[8vw] mt-1 md:w-[4vw] md:h-[4vw]"
    />
  </div>
    <div className="flex flex-col md:flex-row justify-evenly items-center px-12">
      <div className="w-[50vw] h-[50vw] md:w-[30vw] md:h-[30vw]">
        <LottieAnimation  />
      </div>
      <div className="w-full md:w-1/2">
       
        <form onSubmit={handleSubmit} className=" shadow-md rounded-lg p-5">
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="font-[Ubuntu] text-lg mb-2 flex gap-2 items-center">
              Email Address
              <MdEmail className="text-[6vw] text-red-500 md:text-[2vw]" />
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="mb-2 p-2 bg-gray-200 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-500 text-sm"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="message" className="font-[Ubuntu] text-lg mb-2 flex gap-2 items-center">
              Message
              <SiMinutemailer className="text-[6vw] text-red-500 md:text-[2vw]" />
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="p-2 bg-gray-200 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-red-500 text-sm"
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-orange-500 text-white w-full font-semibold p-2 rounded hover:bg-orange-800 disabled:opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

function Contact() {
  return <ContactForm />;
}

export default Contact;
