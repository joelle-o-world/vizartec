import React from 'react';
import {FunctionComponent} from 'react';

export const ContactForm: FunctionComponent = () => {
  return <form className="vzt-contact-form">
    <input type="email" placeholder="Your E-Mail Address" className="vzt-email-input"/>
    <textarea className="vzt-message-input" placeholder="Message" />
    <button className="vzt-form-submit">Get in touch</button>
  </form>
};
