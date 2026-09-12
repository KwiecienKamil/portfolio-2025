import { useRef } from "react";
import emailjs from "emailjs-com";
import { contactInfo } from "../utils/Helpers";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(
        () => {
          toast.success("Wiadomość wysłana, dziękuję!");
          form.current.reset();
        },
        () => {
          toast.error("Wystąpił błąd, spróbuj ponownie");
        },
      );
  };

  return (
    <section
      id="contact"
      className="bg-black text-white flex flex-col sm:flex-row items-center justify-between px-[2%] sm:px-[5%] py-24"
    >
      <div className="flex flex-col mb-8">
        <h4 className="text-4xl sm:text-6xl xl:text-7xl mb-2">
          Let's work <span className="text-accent">together!</span>
        </h4>
        <div className="flex flex-row sm:flex-col justify-between sm:justify-start gap-2 mt-2  sm:mt-0">
          {contactInfo.map((item) => (
            <div key={item.id}>
              <span className="text-accent text-lg sm:text-3xl">
                {item.type}
              </span>
              <p className="text-md sm:text-xl">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[22rem] md:w-[30rem]">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4 text-sm sm:text-md lg:text-lg"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            className="p-4 w-full border-2"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="p-4 w-full border-2"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="p-4 w-full border-2"
            required
          ></textarea>
          <button
            type="submit"
            className="flex items-center justify-center w-full bg-green-500 hover:bg-green-400 duration-300 cursor-pointer p-4"
          >
            Get in touch!
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
