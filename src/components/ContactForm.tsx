import React from 'react';
import {FunctionComponent} from 'react';

export const ContactForm: FunctionComponent = () => {
  return <form className="vzt-contact-form">
    <input type="email" placeholder="Your E-Mail Address" className="vzt-contact-form-email"/>
    <textarea className="vzt-contact-form-message" placeholder="Message" />
  </form>
};
