import { useState } from 'react';

const Contact = ({ isHovered }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/mnnvawdl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          contact: formData.contact,
          message: formData.message,
          _replyto: formData.contact,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', contact: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mt-40">
      <div className="flex flex-col items-center">
        <h2 className={`font-serif italic text-4xl font-bold mb-16 transition-colors duration-300 ${
          isHovered ? 'text-black' : 'text-white'
        }`}>
          Contact
        </h2>

        <div className="w-full max-w-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label 
                htmlFor="name" 
                className={`font-serif italic text-sm mb-2 block transition-colors duration-300 ${
                  isHovered ? 'text-black' : 'text-white'
                }`}
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full p-3 bg-transparent border-2 font-serif italic text-base transition-all duration-300 focus:outline-none focus:ring-2 ${
                  isHovered 
                    ? 'border-gray-400 text-black placeholder-gray-600 focus:border-black focus:ring-black/20' 
                    : 'border-gray-600 text-white placeholder-gray-400 focus:border-white focus:ring-white/20'
                }`}
                placeholder="Your name"
              />
            </div>

            <div>
              <label 
                htmlFor="contact" 
                className={`font-serif italic text-sm mb-2 block transition-colors duration-300 ${
                  isHovered ? 'text-black' : 'text-white'
                }`}
              >
                Email / Phone
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className={`w-full p-3 bg-transparent border-2 font-serif italic text-base transition-all duration-300 focus:outline-none focus:ring-2 ${
                  isHovered 
                    ? 'border-gray-400 text-black placeholder-gray-600 focus:border-black focus:ring-black/20' 
                    : 'border-gray-600 text-white placeholder-gray-400 focus:border-white focus:ring-white/20'
                }`}
                placeholder="your@email.com"
              />
            </div>

            {/* Message Field */}
            <div>
              <label 
                htmlFor="message" 
                className={`font-serif italic text-sm mb-2 block transition-colors duration-300 ${
                  isHovered ? 'text-black' : 'text-white'
                }`}
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={`w-full p-3 bg-transparent border-2 font-serif italic text-base resize-none transition-all duration-300 focus:outline-none focus:ring-2 ${
                  isHovered 
                    ? 'border-gray-400 text-black placeholder-gray-600 focus:border-black focus:ring-black/20' 
                    : 'border-gray-600 text-white placeholder-gray-400 focus:border-white focus:ring-white/20'
                }`}
                placeholder="Your message"
              />
            </div>

            {/* Submit Button and Status */}
            <div className="flex flex-col items-center space-y-3">
              <button
                type="submit"
                disabled={isSubmitting || !formData.name.trim() || !formData.message.trim()}
                className={`font-serif italic text-base px-8 py-3 border-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                  isHovered 
                    ? 'border-black text-black hover:bg-black hover:text-white disabled:hover:bg-transparent disabled:hover:text-black' 
                    : 'border-white text-white hover:bg-white hover:text-black disabled:hover:bg-transparent disabled:hover:text-white'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <span className={`font-serif italic text-sm ${isHovered ? 'text-green-600' : 'text-green-400'}`}>
                  Message sent successfully!
                </span>
              )}
              {submitStatus === 'error' && (
                <span className={`font-serif italic text-sm ${isHovered ? 'text-red-600' : 'text-red-400'}`}>
                  Please fill required fields
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
