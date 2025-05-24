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
            <div className='contact-text'><h5><b>Address</b></h5>
              <h5> Atal Utkrisht Government Inter College Shrikot
               <br/> Pincode : 249152
              </h5>
            </div>
            <div className='contact-text'><h5><b>Contact us</b></h5>
              <h5> 9917868864 , 9897948768
              </h5>
            </div>
            <div className='contact-text'><h5><b>Email</b></h5>
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
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.8593588269914!2d78.29082887557668!3d30.637920974630166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908e9df66684859%3A0x111dd6ab331e536d!2sGovernment%20Inter%20College%2C%20Shrikot!5e0!3m2!1sen!2sin!4v1747991420217!5m2!1sen!2sin"
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
