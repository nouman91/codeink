import React from "react"

import "./form.css"

const Form = () => {
  return (
    <form name="contact" method="POST" data-netlify="true" className="form-container">
      <input type="text" name="name" placeholder="Your Name" maxLength="30" className="form-input"/>
      <input type="email" name="email" placeholder="Your email" maxLength="256" className="form-input"/>
      <textarea
        type="textarea"
        name="message"
        placeholder="Your message"
        maxLength="1000"
        className="form-input"
      />
      <div><button type="submit" className="from-button">Send</button></div>
    </form>
  )
}

export default Form
