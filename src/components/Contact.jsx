import React, { useState } from "react";
import facebook from "../assets/Vector (1).png";
import Twitter from "../assets/Twitter.png";
import Instagram from "../assets/mdi_instagram.png";
import linkedIn from "../assets/ri_linkedin-fill.png";

function Contact() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState([
    {
      email: "",
      phone_number: "",
      first_name: "",
      message: "",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData([
      {
        ...formData,
        email: email,
        phone_number: phone,
        first_name: username,
        message: message,
      },
    ]);

    fetch(' https://backend.getlinked.ai/hackathon/contact-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
  };

  return (
    <div className=" w-full flex py-24 flex-col bg-[#100B20] text-white border-b border-[#903AFF]">
      <div className="flex flex-col md:flex-row px-10 md:px-28">
        <div className="hidden md:flex flex-col gap-12 w-[100%] ">
          <h1 className="text-2xl font-bold text-[#D434FE]">Get in touch</h1>
          <p>
            Contact <br /> Information
          </p>
          <p>
            27,Alara Street <br /> Yaba 100012 <br /> Lagos State
          </p>
          <p>Call Us : 07067981819</p>
          <p>
            we are open from Monday-Friday <br /> 08:00am - 05:00pm
          </p>
          <h3 className="font-bold text-[#D434FE]">Share On</h3>
          <ul className="flex gap-4 self-start mt-[-5]">
            <li>
              <img src={Instagram} alt="" />
            </li>
            <li>
              <img src={Twitter} alt="" className="mt-1" />
            </li>
            <li>
              <img src={facebook} alt="" />
            </li>
            <li>
              <img src={linkedIn} alt="" />
            </li>
          </ul>
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            action=""
            method="post"
            className="md:p-10 md:bg-[#150E28] md:rounded-lg md:shadow-2xl"
          >
            <h1 className="font-bold text-[#D434FE]">
              Questions or need assistance? <br />
              Let us know about it!
            </h1>
            <p className="md:hidden my-10">
              Email us below to any question related to our event
            </p>
            <input
              type="text"
              name="username"
              placeholder="Team's Name"
              className="w-[90%] border p-2 rounded-md border-white bg-[#150E28] my-5"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-[90%] border p-2 rounded-md border-white bg-[#150E28] my-5"
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-[90%] border p-2 rounded-md border-white bg-[#150E28] my-5"
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
              className="w-[90%] border p-2 rounded-md border-white bg-[#150E28] my-5"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button className="md:ml-56 ml-12">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
