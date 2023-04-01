import React, { useState } from "react";
import "./contact.scss";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // your code to handle form submission here
  };

  return (
    <div className="contacts" id="contact">
      <div className="contact-head">LOOKING FOR A FRONTEND DEVELOPER?</div>
      <div className="leave-msg">YOU CAN LEAVE A MESSAGE</div>
      <form className="form-contact" onSubmit={handleSubmit}>
        <div className="form-first-line">
          <div className="form-name">
            {/* <label htmlFor="name">Name:</label> */}
            <input
              type="text"
              placeholder="Your Name"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="form-email">
            {/* <label htmlFor="email">Email:</label> */}
            <input
              type="email"
              placeholder="Your email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
        </div>
        <div className="form-subject">
          {/* <label htmlFor="name">Name:</label> */}
          <input
            type="text"
            placeholder="Subject"
            id="subject"
            value={subject}
            onChange={handleSubjectChange}
          />
        </div>
        <div className="form-msg">
          {/* <label htmlFor="message">Message:</label> */}
          <textarea
            id="message"
            placeholder="Your Message"
            value={message}
            onChange={handleMessageChange}
          />
        </div>
        <button className="contact-button">SEND</button>
      </form>
    </div>
  );
}

export default Contact;
