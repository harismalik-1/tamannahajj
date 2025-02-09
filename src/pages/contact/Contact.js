import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interestedIn: 'hajj', // Default value
    message: '',
    preferredContact: 'email',
    bestTimeToCall: ''
  });

  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ loading: true, success: false, error: null });

    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_vd1djs8', // Replace with your EmailJS service ID
        'template_28g734b', // Replace with your EmailJS template ID
        {
          to_email: 'info@tamannahajj.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          interested_in: formData.interestedIn,
          preferred_contact: formData.preferredContact,
          best_time_to_call: formData.bestTimeToCall,
          message: formData.message,
        },
        'nyEKb64Jfjk2yTK4d' // Replace with your EmailJS public key
      );

      setSubmitStatus({
        loading: false,
        success: true,
        error: null
      });

      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        interestedIn: 'hajj',
        message: '',
        preferredContact: 'email',
        bestTimeToCall: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(prev => ({ ...prev, success: false }));
      }, 5000);

    } catch (error) {
      setSubmitStatus({
        loading: false,
        success: false,
        error: 'Failed to send message. Please try again later.'
      });
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Contact Us</h2>
          <p className="contact-intro">
            We're here to help you plan your spiritual journey. Please fill out the form below, 
            and we'll get back to you as soon as possible.
          </p>
        </div>

        {submitStatus.success && (
          <div className="success-message">
            Thank you for your message! We'll get back to you soon.
          </div>
        )}

        {submitStatus.error && (
          <div className="error-message">
            {submitStatus.error}
          </div>
        )}

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="interestedIn">I'm Interested In *</label>
            <select
              id="interestedIn"
              name="interestedIn"
              value={formData.interestedIn}
              onChange={handleChange}
              required
            >
              <option value="hajj">Hajj Package</option>
              <option value="umrah">Umrah Package</option>
              <option value="both">Both Hajj & Umrah</option>
              <option value="other">Other Inquiries</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="preferredContact">Preferred Contact Method</label>
            <select
              id="preferredContact"
              name="preferredContact"
              value={formData.preferredContact}
              onChange={handleChange}
            >
              <option value="email">Email</option>
              <option value="phone">Phone</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="bestTimeToCall">Best Time to Contact</label>
            <select
              id="bestTimeToCall"
              name="bestTimeToCall"
              value={formData.bestTimeToCall}
              onChange={handleChange}
            >
              <option value="">Select a time</option>
              <option value="morning">Morning (9AM - 12PM)</option>
              <option value="afternoon">Afternoon (12PM - 5PM)</option>
              <option value="evening">Evening (5PM - 8PM)</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Please share any specific requirements, questions, or preferences..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            className={`submit-button ${submitStatus.loading ? 'loading' : ''}`}
            disabled={submitStatus.loading}
          >
            {submitStatus.loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="contact-info">
          <h3>Other Ways to Reach Us</h3>
          <div className="contact-info-grid">
            <div className="contact-info-item">
              <i className="fas fa-phone"></i>
              <p>
                <strong>Phone:</strong><br />
                +1 (XXX) XXX-XXXX
              </p>
            </div>
            <div className="contact-info-item">
              <i className="fas fa-envelope"></i>
              <p>
                <strong>Email:</strong><br />
                info@tamannahajj.com
              </p>
            </div>
            <div className="contact-info-item">
              <i className="fas fa-clock"></i>
              <p>
                <strong>Office Hours:</strong><br />
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
