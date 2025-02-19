import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import { translations } from '@/translations/translations';

const ContactPage = ({ language }) => {
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch('https://voltellum.com/send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus({
        submitting: false,
        submitted: true,
        error: null
      });

      // Clear form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch (error) {
      console.error('Error sending message:', error);
      setStatus({
        submitting: false,
        submitted: false,
        error: language === 'sv' ? 
          'Det gick inte att skicka meddelandet. Försök igen senare.' : 
          'Failed to send message. Please try again later.'
      });
    }
  };

  return (
    
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">{t.contact.title}</h1>
          
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <a href="tel:+46730299784" className="text-lg text-gray-900 hover:text-blue-600">
                  +46 73 02 99 784
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <a href="mailto:info@voltellum.com" className="text-lg text-gray-900 hover:text-blue-600">
                  info@voltellum.com
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            {status.submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6">
                <p>{language === 'sv' ? 
                  'Tack för ditt meddelande! Vi återkommer till dig så snart som möjligt.' : 
                  'Thank you for your message! We will get back to you as soon as possible.'}
                </p>
              </div>
            ) : null}

            {status.error ? (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6">
                <p>{status.error}</p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-900 mb-2" htmlFor="name">
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-900 mb-2" htmlFor="email">
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-900 mb-2" htmlFor="message">
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border rounded h-32 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status.submitting}
                className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors"
              >
                {status.submitting ? (
                  <span>{language === 'sv' ? 'Skickar...' : 'Sending...'}</span>
                ) : (
                  t.contact.send
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    
  );
};

export default ContactPage;