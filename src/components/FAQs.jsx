import React from "react";
import manOnCloud from "../assets/man on cloud.png";
import { useRef } from "react"

function FAQs() {

    const activeAccordion = useRef(null)

    const toggleFaq = (e) => {
    if(e.target.classList.contains("active")){
    e.target.classList.remove("active")
    } else {
    //check if any accordion is opened and close it if opened 
    activeAccordion.current.querySelector('.accordion.active')?.classList.remove('active');
    e.target.classList.add("active")
    }
    }

  return (
    <div name="FAQs" className="py-10 w-full flex bg-[#100B20] text-white border-b border-[#903AFF]">
      <div className="md:grid grid-cols-2 justify-between gap-10 max-w-[1000px] mx-auto mt-10">
        <div className="md:col-start-2">
          <img
            src={manOnCloud}
            alt=""
            className="w-[80%] mx-auto md:w-[100%]"
          />
        </div>
        <div className="md:ml-20 text-center md:text-left my-10 p-1 md:col-start-1 md:row-start-1">
          <h1 className="text-xl md:text-1xl my-2 font-bold">
            Frequently Ask
            <br />
            <span className="text-[#D434FE]">Question</span>
          </h1>
          <p className="px-5 md:px-0">
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>
          <section className="FAQ text-xs" id="FAQ">
            <div className="faq-main" ref={activeAccordion}>
              <div className="accordion" onClick={toggleFaq}>
                <p>Can I work on a project I started before the hackathon?</p>
              </div>
              <div className="panel">
                Lorem ipsum dolor sit amet.
              </div>
              <hr />
              <div className="accordion" onClick={toggleFaq}>
                <p>
                What happens if I need help during the hackathon?
                </p>
              </div>
              <div className="panel">
                Lorem ipsum dolor sit amet.
              </div>
              <hr />
              <div className="accordion" onClick={toggleFaq}>
                <p>What happens if I don't have an idea for a project?</p>
              </div>
              <div className="panel">
                Lorem ipsum dolor sit amet.
              </div>
              <hr />
              <div className="accordion" onClick={toggleFaq}>
                <p>
                Can I join a team or do I have to come with one?
                </p>
              </div>
              <div className="panel">
                Lorem ipsum dolor sit amet.
              </div>
              <hr />
              <div className="accordion" onClick={toggleFaq}>
                <p>
                  What happens after the hackathon ends
                </p>
              </div>
              <div className="panel">
                Lorem ipsum dolor sit amet.
              </div>
              <hr />
              <div className="accordion" onClick={toggleFaq}>
                <p>Can I work on a project I started before the hackathon?</p>
              </div>
              <div className="panel">
                Lorem ipsum dolor sit amet.
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
