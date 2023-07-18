import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation//
    // This if statement checks if the name variable, obtained from the state using useState, is an empty string  (whitespace) using trim().
// The return statement is used to exit the handleSubmit function, preventing further execution and stopping the form submission process.
    if (name.trim() === "") {
      alert("Please enter your name");
      return;
    }

    if (email.trim() === "") {
      alert("Please enter your email");
      return;
    }

    if (message.trim() === "") {
      alert("Please enter your message");
      return;
    }

    // Submit the form
    // You can add your own logic here to handle form submission, such as sending the data to a server or displaying a success message
    alert("Form submitted successfully!");

    // Clear form fields
    // This ensures that after the form is submitted, the fields are reset to their initial empty state, 
    // ready for the user to enter new information if they wish to submit another form.
    setName("");
    setEmail("");
    setMessage("");
  };

//   The function above is in the code below as a onsumbit event. The onchange updates the name,email, and message values.
  return (
    <div>
      <h2 className="title">Contact Us</h2>
      <div className="contact-container">
        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder=""
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder=""
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder=""
            id="message"
            name="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" id="submit" name="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
