import React, { useState } from "react";
import man from "../assets/3d-graphic.png";
import walkingMan from "../assets/walkingMan.png";
import walkingWowan from "../assets/walkingWowan.png";
import congrats from "../assets/congratulation.png";
import { Link as RouterLink } from "react-router-dom";

function Register() {
  const [submit, setSubmit] = useState(false)
  const [teamName, setTeamName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [formData, setFormData] = useState([
    {
      teamName: "",
      phone: "",
      email: "",
      topic: "",
      category: "",
      size: "",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData([
      {
        ...formData,
        teamName: teamName,
        phone: phone,
        email: email,
        topic: topic,
        category: category,
        size: size,
      },
    ]);

    fetch(" https://backend.getlinked.ai/hackathon/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    setSubmit(true)
  };

  return (
    <div className=" w-full flex py-24 flex-col bg-[#150E28] text-white border-b border-[#903AFF]">
     { submit ? <div className="fixed inset-0 bg-[#150E28] bg-opacity-75 transition-opacity">
        <div className="max-w-[500px] mx-auto border border-[#903AFF] p-5 mt-20 text-center">
          <img src={congrats} alt="" />
          <h1>Congratulations you have successfully Registered!</h1>
          <p className="my-10">
            Yes it was easy and you did it! <br />
            Check your email for the last step
          </p>
          <button className="w-[100%]">
            <RouterLink to={"/Register"}>Back</RouterLink>
          </button>
        </div>
      </div> : ""}
      <div className="md:flex ">
        <img src={man} alt="" className="w-[200px] md:w-[80%] mx-auto" />

        <div className="md:w-[80%]">
          <div className="text-center md:text-left">
            <div className="text-sm flex gap-2 px-10 relative">
              be part of this movement{" "}
              <span className="text-[#D434FE]">..............</span>
              <img
                src={walkingWowan}
                alt=""
                className="absolute right-16 bottom-1 md:left-56"
              />
              <img
                src={walkingMan}
                alt=""
                className="absolute right-10 bottom-1 md:left-60"
              />
            </div>
            <h1 className="text-xl mb-5 md:ml-10 md:mt-5">
              CREATE YOUR ACCOUNT
            </h1>
          </div>
          <form
          onSubmit={handleSubmit}
            action=""
            method="post"
            className="p-10 md:bg-[#150E28] md:rounded-lg md:shadow-2xl"
          >
            <div className="md:flex gap-10">
              <div>
                <label htmlFor="Team Name" className="text-xs">
                  Team's Name
                </label>{" "}
                <br />
                <input
                  type="text"
                  name="teamName"
                  placeholder="Enter the name of your group"
                  onChange={(e) => setTeamName(e.target.value)}
                  className="text-xs w-[90%] md:w-[250px] border p-2 rounded-md border-white bg-[#150E28] mb-5"
                />
              </div>
              <div>
                <label htmlFor="Phone" className="text-xs">
                  Phone
                </label>{" "}
                <br />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  onChange={(e) => setPhone(e.target.value)}
                  className="text-xs w-[90%] md:w-[250px] border p-2 rounded-md border-white bg-[#150E28] mb-5"
                />
              </div>
            </div>

            <div className="md:flex gap-10">
              <div>
                <label htmlFor="Email" className="text-xs">
                  Email
                </label>
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-xs w-[90%] md:w-[250px] border p-2 rounded-md border-white bg-[#150E28] mb-5"
                />
              </div>
              <div>
                <label htmlFor="Project" className="text-xs">
                  Project Topic
                </label>
                <input
                  type="text"
                  name="topic"
                  placeholder="What is your group project topic"
                  onChange={(e) => setTopic(e.target.value)}
                  className="text-xs w-[90%]  border p-2 rounded-md border-white bg-[#150E28] mb-5"
                />
              </div>
            </div>

            <div className="flex md:gap-10">
              <div>
                <label htmlFor="Category">Category</label> <br />
                <select
                  name="category"
                  id="Category"
                  onChange={(e) => setCategory(e.target.value)}
                  className="text-xs w-[90%] md:w-[250px] border p-2 rounded-md border-white bg-[#150E28] mb-5"
                >
                  <option value="Select your category">
                    Select your category
                  </option>
                  <option value="Select">1</option>
                  <option value="Select">2</option>
                  <option value="Select">3</option>
                  <option value="Select">4</option>
                  <option value="Select">5</option>
                </select>
              </div>

              <div>
                <label htmlFor="Group" className="text-sm">
                  Group Size
                </label>{" "}
                <br />
                <select
                  name="size"
                  id="Group"
                  onChange={(e) => setSize(e.target.value)}
                  className="text-xs w-[100%] md:w-[250px] border p-2 rounded-md border-white bg-[#150E28] mb-5"
                >
                  <option value="Select">Select</option>
                  <option value="Select">1</option>
                  <option value="Select">2</option>
                  <option value="Select">3</option>
                  <option value="Select">4</option>
                  <option value="Select">5</option>
                </select>
              </div>
            </div>
            <p className="text-xs text-[#D434FE] italic mb-5">
              Please review your registration details before submittin
            </p>
            <div className="flex text-sm">
              <input type="checkbox" name="" id="" className="self start" />
              <p className="mt-10 md:mt-0">
                I agreed with the event terms and conditions and privacy policy
              </p>
            </div>
            <button className=" ml-12 mt-5 md:ml-0 md:w-[90%]">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
