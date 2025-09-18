import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import axios from "axios";
import { IoIosSend } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { RiPhoneLine } from "react-icons/ri";
import { VscLocation } from "react-icons/vsc";
import { MdConnectWithoutContact } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";

export default function Contact() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
    about: "",
  });
  const form = useRef();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post("http://localhost:3597/api/user/createuser", user);
  //     alert("Message sent!");
  //     setUser({ name: "", email: "", message: "", about: "" });
  //   } catch (err) {
  //     alert("Something went wrong. Please try again");
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_b4mg6fs", "template_5egt6cp", form.current, {
      publicKey: "kpG_4ue7TuASBxS_P",
    })
    .then(
      () => {
        alert("Message sent!");
        console.log("SUCCESS!");
        setUser({ name: "", email: "", message: "", about: "" });
      },
      (error) => {
        alert("Message failed to send! Please try again");
        console.error("FAILED...", error.text);
      }
    );
  };

  const info =
    "flex items-center gap-2 bg-black dark:bg-white p-4 rounded-lg shadow shadow-neutral-500";

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center p-10 bg-gray-900 text-white dark:bg-white dark:text-black"
    >
      <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
      <p className="text-center max-w-2xl">
        Feel free to reach out! I'm always open to discussing new projects or
        opportunities. Let's connect and collaborate!
      </p> 

      <div className="grid md:grid-cols-2 gap-8 mt-10 w-full max-w-5xl">
        {/* Contact Form */}
        <div className="bg-black dark:bg-white shadow shadow-neutral-500 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Send Me a Message</h3>
          <form 
          ref={form}
          onSubmit={handleSubmit} 
          className="flex flex-col w-full gap-4">
            <input
              className="p-3 bg-black dark:bg-white border rounded-lg shadow shadow-neutral-900"
              type="text"
              name="user_name"
              placeholder="Name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              required
            />
            <input
              className="p-3 bg-black dark:bg-white border rounded-lg shadow shadow-neutral-900"
              type="email"
              name="user_email"
              placeholder="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            />
            <input
              className="p-3 bg-black dark:bg-white border rounded-lg shadow shadow-neutral-900"
              type="text"
              name="user_message"
              placeholder="Subject of your message"
              value={user.message}
              onChange={(e) => setUser({ ...user, message: e.target.value })}
            />
            <textarea
              className="p-3 bg-black dark:bg-white border rounded-lg min-h-[120px] shadow shadow-neutral-900"
              name="user_about"
              placeholder="Hello, I'd like to talk about..."
              value={user.about}
              onChange={(e) => setUser({ ...user, about: e.target.value })}
              required
            />
            <button
              type="submit"
              className="flex items-center justify-center bg-red-500 px-6 py-3 rounded font-bold text-xl hover:bg-red-700 transition"
            >
              <IoIosSend className="mr-2 text-3xl" />
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <div className={`${info}`}>
            <BiLogoGmail className="text-red-500 text-3xl" />
            <div className=" ">
              <h3 className="font-bold text-lg">Email</h3>
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                className="hover:underline hover:text-cyan-400"
              >
                muthuganesh3597@gmail.com
              </a>
            </div>
          </div>

          <div className={`${info}`}>
            <RiPhoneLine className="text-red-500 text-3xl" />
            <div className=" ">
              <h3 className="font-bold text-lg">Phone</h3>
              <p className="hover:text-cyan-300">+91 7373230059</p>
            </div>
          </div>

          <div className={`${info}`}>
            <VscLocation className="text-red-500 text-3xl" />
            <div className="">
              <h3 className="font-bold text-lg">Location</h3>
              <p className="hover:text-cyan-300">
                Coimbatore, Tamil Nadu, India
              </p>
            </div>
          </div>

          <div className={`${info}`}>
            <MdConnectWithoutContact className="text-red-500 text-4xl" />
            <div className="flex flex-col items-center gap-2">
              <div className="">
                <h3 className="font-bold text-lg">Connect With Me</h3>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/muthuganesh3597"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:shadow-red-500 border-x border-blue-500 shadow rounded-br-xl rounded-tl-xl"
                >
                  <AiOutlineLinkedin className=" text-3xl" />
                </a>
                <a
                  href="https://github.com/MuthuganeshMG"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:shadow-red-500 border-x border-blue-500 shadow rounded-full"
                >
                  <VscGithub className="text-3xl" />
                </a>
                <a
                  href="https://muthuganesh3597@gmail.com"
                  // href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                  target="_blank"
                  rel="noreferrer"
                  className=" hover:shadow-red-500 border-x border-blue-500 shadow rounded-bl-xl rounded-tr-xl"
                >
                  <BiLogoGmail className="text-3xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="grid md:grid-cols-2 gap-6 mt-10 w-full max-w-5xl shadow shadow-neutral-500 p-6 rounded-lg bg-gray-800 text-white dark:bg-gray-200 dark:text-black">
        <div className="bg-black dark:bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">Availability</h3>
          <p>
            I'm currently available for freelance work and open to new
            opportunities. Let's discuss how we can work together!
          </p>
        </div>
        <div className="bg-black dark:bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">What I Work With</h3>
          <p>
            I have experience in a variety of programming languages and
            frameworks, including JavaScript, React, Node.js, and more. I'm
            always eager to learn new technologies and improve my skills.
          </p>
        </div>
      </div>
    </section>
  );
}

// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export default function Contact() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_b4mg6fs', 'template_5egt6cp', form.current, {
//         publicKey: 'kpG_4ue7TuASBxS_P',
//       })
//       try {
//         alert("Message sent!");
//         console.log('SUCCESS!');
//       } catch (error) {
//         alert("Message failed to send! Please try again");
//         console.log('FAILED...', error.text);
//       }
//       // .then(
//       //   () => {
//       //     console.log('SUCCESS!');
//       //   },
//       //   (error) => {
//       //     console.log('FAILED...', error.text);
//       //   },
//       // );
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <input type="text" name="user_about" />
//       <label>Message</label>
//       <textarea name="user_message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };
