// src/components/contact/Contact.jsx

import { contactData } from "../../data/contactData";
import ConnectionCard from "./ConnectionCard";
import { faClock, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div className="bg-white py-10 md:py-20" id="contact">
      <div className="content max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Connect With Me</h2>
          <p className="mt-4 text-lg text-soft-dark max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities. Choose your preferred way to get in touch.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactData.map((item, index) => (
            <ConnectionCard item={item} key={index} />
          ))}
        </div>
        
        <div className="mt-12 flex items-center justify-center gap-3 text-soft-dark">
          <FontAwesomeIcon icon={faClock} />
          <p>Typically respond within <strong>24 hours</strong> on weekdays.</p>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-soft-white p-8 md:p-12 rounded-2xl">
          <div>
            <h3 className="text-3xl font-bold text-picto-primary">Send a Direct Message</h3>
            <p className="mt-4 text-soft-dark">
              Have a specific question or project proposal? Fill out the form, and I'll get back to you as soon as possible.
            </p>
          </div>
          
          {/* THIS IS THE FORM THAT SOLVES THE "Form is not defined" ERROR */}
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-soft-dark mb-2">Your Name</label>
              <input type="text" id="name" name="user_name" placeholder="John Doe" required 
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-picto-primary focus:border-picto-primary transition"/>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-soft-dark mb-2">Your Email</label>
              <input type="email" id="email" name="user_email" placeholder="john.doe@example.com" required 
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-picto-primary focus:border-picto-primary transition"/>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-soft-dark mb-2">Your Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Let's discuss your project..." required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-picto-primary focus:border-picto-primary transition"></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full py-3 text-base font-semibold flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faPaperPlane} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;