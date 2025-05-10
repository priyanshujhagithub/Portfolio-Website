import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Contact.css';

const fadeSlide = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
  viewport: { once: true }
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['center center', 'start end', 'end start'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.3, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.92]);

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
    <section id="contact" className="contact-section" ref={sectionRef}>
      <motion.div
        className="contact-content"
        style={{ scale, opacity }}
        {...fadeSlide}
      >
        <div className="about-heading-row">
          <span className="about-section-number">04.</span>
          <h2 className="about-title">Contact Me</h2>
          <div className="about-divider" />
        </div>
        <p>Let's build something awesome together. Feel free to reach out!</p>

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
