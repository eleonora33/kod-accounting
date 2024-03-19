import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Iframe from 'react-iframe';
import Navbar from './Navbar';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ID', 'template_ID', form.current, 'RtuCTQ7quvf8G4mPk')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    form.current.reset();
  };

  return (
    <div>
      <Navbar />
      <div className="contact_section layout_padding" id="contact-us-section">
        <div className="container-fluid">
          <h1 className="what_taital">Контактирајате Нѐ</h1>
          <p className="amet_text">Вашата визија е нашата мисија. Стапете во контакт со нас и дозволете ни да го оформиме вашиот финансиски успех и стратегија заедно. </p>
          <div className="contact_section2">
            <div className="row">
              <div className="col-md-6 padding_left_0">
                <form className="mail_section" ref={form} onSubmit={sendEmail}>
                  <input type="" className="mail_text_1" placeholder="Name" name="Name" />
                  <input type="" className="mail_text_1" placeholder="Phone Number" name="Phone Number" />
                  <input type="" className="mail_text_1" placeholder="Email" name="Email" />
                  <textarea className="massage_text" placeholder="Message" rows="5" id="comment" name="Message"></textarea>
                  <div className="send_bt"><a href="#">прати</a></div>
                </form>
              </div>
              <div className="col-md-6 padding_0">
                <div className="map-responsive">
                  <Iframe url="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2964.7151580143577!2d21.42028547583037!3d42.00638827122798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smk!4v1689025525034!5m2!1sen!2smk&amp;"
                    width="600"
                    height="400"
                    frameborder="0"
                    style={{ border: "0", width: "100%" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
