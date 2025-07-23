'use client';

import { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function EmailPage() {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_hhtnb4j",
        "template_xntmyvm",
        form.current,
        "myNcJyBDJ6LO7xcLq"
      )
      .then(() => {
        alert('✅ Email sent!');
        form.current.reset();
      })
      .catch((error) => {
        console.error('❌ Email failed:', error);
        alert('❌ Something went wrong.');
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-8">
      <form ref={form} onSubmit={sendEmail} className="w-full max-w-md space-y-6 bg-gray-800 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center">Contact Us</h2>

        <div>
          <label className="block mb-1">Name</label>
          <input type="text" name="user_name" required className="w-full px-4 py-2 rounded bg-gray-700 text-white" />
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input type="email" name="user_email" required className="w-full px-4 py-2 rounded bg-gray-700 text-white" />
        </div>

        <div>
          <label className="block mb-1">Message</label>
          <textarea name="message" required className="w-full px-4 py-2 rounded bg-gray-700 text-white"></textarea>
        </div>

        <button type="submit" className="w-full py-2 bg-indigo-500 hover:bg-indigo-600 rounded">
          Send
        </button>
      </form>
    </div>
  );
}
