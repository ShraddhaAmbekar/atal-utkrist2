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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tenetur, dolores magni
            necessitatibus aliquid optio, quaerat libero sequi vitae harum ad veniam.
          </h4>
        </div>

        <div className="container information">
          <div className="img-con">
            <img
              src="https://static.wixstatic.com/media/2e2a49_c8de1e6e955d459aa01defe9f5971dad~mv2.jpg/v1/fill/w_611,h_646,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2e2a49_c8de1e6e955d459aa01defe9f5971dad~mv2.jpg"
              alt="school"
            />
          </div>

          <div className='quote'>
            <h2>Visit our school</h2>
            <div className='contact-text'><h5>Address</h5>
              <h5>Lorem ipsum dolor sit amet.</h5>
            </div>
            <div className='contact-text'><h5>Contact us</h5>
              <h5>Lorem ipsum dolor sit amet.</h5>
            </div>
            <div className='contact-text'><h5>Email</h5>
              <h5>Lorem ipsum dolor sit amet.</h5>
            </div>
          </div>

          <div className="img-con order-0 order-md-1">
            <img
              src="https://static.wixstatic.com/media/2e2a49_c8de1e6e955d459aa01defe9f5971dad~mv2.jpg/v1/fill/w_611,h_646,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2e2a49_c8de1e6e955d459aa01defe9f5971dad~mv2.jpg"
              alt="school"
            />
          </div>

          <div className='order-0 oder-md-1'>
            <div className='quote'>
              <h2>You can also contact us with form</h2>

              <div className="d-flex justify-content-center align-items-center p-5">
                <form
                  className="p-3 rounded shadow"
                  style={{
                    width: "100%",
                    maxWidth: "450px",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(6px)"
                  }}
                  onSubmit={handleSubmit}
                >
                 

                  {submitted && (
                    <div className="alert alert-success py-2 text-center" role="alert">
                     <h5> Message sent successfully!</h5>
                    </div>
                  )}

                  <div className="mb-2">
                    <input type="text" className="form-control" placeholder="Your Name" required />
                  </div>

                  <div className="mb-2">
                    <input type="email" className="form-control" placeholder="Email Address" required />
                  </div>

                  <div className="mb-2">
                    <textarea className="form-control" rows="2" placeholder="Message" required></textarea>
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </>
    </div>
  );
};

export default Contact;
