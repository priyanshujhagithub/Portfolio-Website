import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Contact.css';

toast.configure();

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const serviceID = 'service_l9t106r';
    const templateID = 'template_u424699';
    const userID = 'z5MyX3DpL-i_6RlYG';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then(
        () => {
          toast.success('Message sent successfully!', {
            position: toast.POSITION.TOP_CENTER,
          });
          setFormData({ name: '', email: '', message: '' });
        },
        error => {
          toast.error('Failed to send message. Try again later.', {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Contact Me</h2>
        <p>Let’s build something awesome together. Feel free to reach out!</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
