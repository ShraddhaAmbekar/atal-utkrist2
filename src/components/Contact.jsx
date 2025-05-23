import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault(); // prevent form reload
    setSubmitted(true);


    // Optional: clear the success message after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
    e.target.reset();
  };


  return (
    <div>
      <>
        <div className="text1 quote text-center">
          <h1>Contact us</h1>
          <h4>
            Vibrant Campus Life offers sports, cultural clubs, and community service. Through Personalized Learning in small cohorts, every student thrives.
          </h4>
        </div>

        <div className="container information">
          <div >
            <img className="img-con"
              src="/assets/contact1.jpg"
              alt="school"
            />
          </div>

          <div className='info-content'>
            <h2>Visit our school</h2>
            <div className='contact-text'><h5>Address</h5>
              <h5> Atal Utkist Government Inter College Shrikot
                Pincode : 249152
              </h5>
            </div>
            <div className='contact-text'><h5>Contact us</h5>
              <h5> 9917868864 , 9897948768
              </h5>
            </div>
            <div className='contact-text'><h5>Email</h5>
              <h5>gicshrikot.uki@gmail.com
              </h5>
            </div>
          </div>

          <div className="order-0 order-md-1">
            <img className="img-con"
              src="/assets/contact1.jpg"
              alt="school"
            />
          </div>

          <div className='order-0 oder-md-1'>
            <div className='info-content'>
              <h2>You can also contact us with form</h2>

              <div className="d-flex justify-content-center align-items-center">
                <form
                  className="p-3 rounded shadow contact-form"

                  onSubmit={handleSubmit}
                >


                  {submitted && (
                    <div className="alert alert-success py-2 text-center" role="alert">
                      <h5> Message sent successfully!</h5>
                    </div>
                  )}

                  <div className="mb-4">
                    <input type="text" className="form-control" placeholder="Your Name" required />
                  </div>

                  <div className="mb-4">
                    <input type="email" className="form-control" placeholder="Email Address" required />
                  </div>

                  <div className="mb-4">
                    <textarea className="form-control" rows="4" placeholder="Message" required></textarea>
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>

         <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3431.5991531021273!2d78.22733687557809!3d30.673414174612944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDQwJzI0LjMiTiA3OMKwMTMnNDcuNyJF!5e0!3m2!1sen!2sin!4v1745372467733!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen=""
           
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </>
    </div>
  );
};

export default Contact;
