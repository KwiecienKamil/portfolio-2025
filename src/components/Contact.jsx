import React from "react";
import { contactInfo } from "../utils/Helpers";

const Contact = () => {
  return <section id="contact" className="bg-black text-white flex flex-col sm:flex-row items-center justify-between px-[2%] sm:px-[5%] py-24">
    <div className="flex flex-col mb-8">
      <h4 className="text-5xl sm:text-6xl xl:text-7xl mb-2">Let's work together!</h4>
      <div className="flex flex-row sm:flex-col justify-between sm:justify-start gap-2 mt-2  sm:mt-0">
        {contactInfo.map((item) => (
          <div key={item.id}>
            <span className="text-accent text-xl sm:text-3xl">{item.type}</span>
            <p className="text-lg sm:text-xl">{item.value}</p>
          </div>
        ))}
        </div> 
    </div>
    <div className="w-[24rem] md:w-[30rem]"> 
      <form className="flex flex-col gap-4 text-sm sm:text-md lg:text-lg">
        <input type="text" placeholder="Name" className="p-4 w-full border-2"/>
        <input type="text" placeholder="Email" className="p-4 w-full border-2"/>
        <textarea id="message" placeholder="Message" className="p-4 w-full border-2"></textarea>
        <button className="flex items-center justify-center w-full bg-green-500 p-4">Get in touch!</button>
      </form>
    </div>
  </section>;
};

export default Contact;
