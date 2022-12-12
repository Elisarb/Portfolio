import React from 'react';
import "../Contact/Contact.scss";
// import logo from "./logo.svg";
import * as emailjs from "emailjs-com";

const SERVICE_ID = "service_portfolio2704";
const TEMPLATE_ID = "template_27042001";
const USER_ID = "0PFwvqMvigEp0vqTP";

function Contact() {
  const [email, setEmail] = React.useState("");

  function handleClick() {
    console.log(email)
    var data = {
      to_email:email,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then(
      function (response) {
        console.log(response.status, response.text);
      },
      function (err) {
        console.log(err);
      }
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Enter your email here
          <input
            type="email"
            onChange={(event) => setEmail(event.target.value)}
          ></input>
          <button type="submit" onClick={handleClick}>
            Send mail
          </button>
        </p>
      </header>
    </div>
  );
}

export default Contact;