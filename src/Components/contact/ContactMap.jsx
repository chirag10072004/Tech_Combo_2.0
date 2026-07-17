import React from 'react'



const ContactMap = () => {
  return (
    <div className="w-full bg-white rounded-3xl p-4 shadow-[0_15px_50px_rgba(0,0,0,0.03)] border border-slate-100/80">
      <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
        <iframe
          title="TechCombo Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.0348734360414!2d79.03895177485164!3d21.117178180554358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf2ae4ff6ed7%3A0x12145dd4c2123eb3!2sEffiman%20Services%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1784178647766!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          className="w-full h-full rounded-2xl"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMap;

