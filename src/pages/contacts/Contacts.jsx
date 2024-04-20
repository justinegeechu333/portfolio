import React from "react";
import "./Contacts.css";
import { CiHome } from "react-icons/ci";
import { FaPhoneSquare } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";
import { FaGithubSquare } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";

const Contacts = () => {
  return (
    <section
      data-page="contacts"
      className="flex flex-col gap-8 max-w-5xl mx-auto"
    >
      <section data-section="contact" className="h-full flex flex-col">
        <h2 className="p-4">Contacts</h2>
        <section className="grid  min-h-[80vh] justify-center items-center border border-slate-400 rounded-md">
          <section className="contact-list">
            <span className="hover-info" data-hover-info="San Antonio, TX">
              <CiHome />
            </span>
            <span data-hover-info="512-919-6838">
              <FaPhoneSquare />
            </span>
            <span data-hover-info="click me">
              <a href="mailto:Justinegeechu333@gmail.com" target="_blank">
                <MdAlternateEmail />
              </a>
            </span>
            <span data-hover-info="click me">
              <a
                href="https://www.linkedin.com/in/justine-gee-chu"
                target="_blank"
              >
                <GrLinkedin />
              </a>
            </span>
            <span data-hover-info="click me">
              <a href="https://github.com/justinegeechu333" target="_blank">
                <FaGithubSquare />
              </a>
            </span>
            <span data-hover-info="click me">
              <a href="https://medium.com/@justinegeechu333" target="_blank">
                <FaMedium />
              </a>
            </span>
            <span data-hover-info="click me">
              <a href="http://huntr.co/p/justine-chu" target="_blank">
                <img src="/huntr.png" />
              </a>
            </span>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Contacts;
