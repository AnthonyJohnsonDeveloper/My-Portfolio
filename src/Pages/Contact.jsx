import React, { useEffect } from "react";

function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js";
    script.async = true;
    document.body.appendChild(script);

    window._HB_ = window._HB_ || {};
    window._HB_.pid = "67cdcdf91e588a001f76a960";
  }, []);

  return (
    <section id="contact" className="container">
      <h1 className="section__title">Let's Work Together</h1>
      <div className="hb-p-67cdcdf91e588a001f76a960-2" />
    </section>
  );
}

export default Contact;