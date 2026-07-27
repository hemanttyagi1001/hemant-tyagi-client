import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_ee52n2n';
const EMAILJS_TEMPLATE_ID = 'template_tp9qdyj';
const EMAILJS_PUBLIC_KEY = 'z6oa-WfQ1uIfvalmY';

export default function ContactSection() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(null), 5000);
      })
      .catch(() => {
        setStatus('error');
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <div id="contact" className="section bg-white dark:bg-boxDark rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition ease-out duration-[160ms]">
      <div className="md:w-4/5 lg:w-3/4">
        <h6 className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 mb-5 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text="Contact">Get In Touch</h6>
        <h2 className="text-3xl lg:text-4xl font-poppins font-semibold mb-3 lg:mb-4 dark:text-white">Let's Connect</h2>
        <p className="text-pColor dark:text-white/70">Feel free to reach out for collaborations, project inquiries, or just a friendly chat about technology.</p>
      </div>
      <div className="xl:w-4/5 mt-6">
        <ul className="space-y-3">
          <li className="list-none inline-block px-4 py-2 border border-black/20 border-dashed rounded-full me-2 text-pColor hover:text-black transition ease-linear duration-100 dark:text-white/70 dark:border-white/20 dark:hover:text-white">Phone: +91-9548550009</li>
          <li className="list-none inline-block px-4 py-2 border border-black/20 border-dashed rounded-full me-2 text-pColor hover:text-black transition ease-linear duration-100 dark:text-white/70 dark:border-white/20 dark:hover:text-white">Email: hemanttyagi1001@gmail.com</li>
          <li className="list-none inline-block px-4 py-2 border border-black/20 border-dashed rounded-full me-2 text-pColor hover:text-black transition ease-linear duration-100 dark:text-white/70 dark:border-white/20 dark:hover:text-white">Location: MuzaffarNagar, Uttar Pradesh, India</li>
        </ul>
      </div>
      {/* <form ref={formRef} className="space-y-8 mt-8 lg:mt-12" onSubmit={handleSubmit}>
        <div className="flex w-full space-x-4">
          <div className="w-1/2">
            <input
              className="bg-transparent w-full border-b border-black/20 border-dashed pb-4 py-0 text-sm text-black placeholder:text-black/40 transition ease-out duration-[120] focus:outline-none focus:border-black dark:text-white dark:placeholder:text-white/50 dark:border-white/20 dark:focus:border-white"
              type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required
            />
          </div>
          <div className="w-1/2">
            <input
              className="bg-transparent w-full border-b border-black/20 border-dashed pb-4 py-0 text-sm text-black placeholder:text-black/40 transition ease-out duration-[120] focus:outline-none focus:border-black dark:text-white dark:placeholder:text-white/50 dark:border-white/20 dark:focus:border-white"
              type="email" name="email" value={formData.email} onChange={handleChange} placeholder="E-Mail" required
            />
          </div>
        </div>
        <input
          className="w-full bg-transparent border-b border-black/20 border-dashed pb-4 py-0 text-sm text-black placeholder:text-black/40 transition ease-out duration-[120] focus:outline-none focus:border-black dark:text-white dark:placeholder:text-white/50 dark:border-white/20 dark:focus:border-white"
          type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required
        />
        <textarea
          className="bg-transparent w-full h-[100px] border-b border-black/20 border-dashed pb-4 py-0 text-sm text-black placeholder:text-black/40 transition ease-out duration-[120] focus:outline-none focus:border-black dark:text-white dark:placeholder:text-white/50 dark:border-white/20 dark:focus:border-white"
          name="message" value={formData.message} onChange={handleChange} placeholder="Message"
        />
        <button className="inline-block bg-black text-white px-8 py-4 rounded-full font-mono text-sm transition linear duration-100 dark:bg-white/15 dark:hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed" type="submit" disabled={sending}>
          {sending ? 'Sending...' : 'Send Message'}
        </button>
      </form> 
      <div className="submit-result mt-4">
        {status === 'success' && <span className="text-green-700 transition-all duration-200 ease-out">Thank you! Your Message has been sent.</span>}
        {status === 'error' && <span className="text-red-600 transition-all duration-200 ease-out">Something went wrong, Please try again!</span>}
      </div>*/}
    </div>
  );
}
