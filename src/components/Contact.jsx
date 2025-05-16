import React from 'react'

const Contact = () => {
  return (
    <div>
      <>
        <div className="quote text-center">
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
            <h2>Visit our school
            </h2>
            <h5 className='quote-text'>Address 
              <span className='d-block'>Lorem ipsum dolor sit amet.</span>
              </h5>
                   <h5 className='quote-text'>Contact us
              <span className='d-block'>Lorem ipsum dolor sit amet.</span>
              </h5> <h5 className='quote-text'>Email 
              <span className='d-block'>Lorem ipsum dolor sit amet.</span>
              </h5>

          </div>

          <div className="img-con order-0 order-md-1">
          <img
              src="https://static.wixstatic.com/media/2e2a49_c8de1e6e955d459aa01defe9f5971dad~mv2.jpg/v1/fill/w_611,h_646,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2e2a49_c8de1e6e955d459aa01defe9f5971dad~mv2.jpg"
              alt="school"
            />
          </div>
          <div className=' order-0 oder-md-1'>   <div className='quote'>
            <h2>You can also contact us with form
            </h2><h5 className='quote-text'>form</h5>
          </div></div>
        
        </div>


      </>
    </div>
  )
}

export default Contact
