import React from 'react';
import './Other.css';

const About = () => {
  return (
    <>
      <div className="text1 quote text-center">
        <h1>Our School</h1>
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
        <div className='info-content'>
          <h2>Mission
        </h2><h5 className='quote-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora velit corporis molestias, eaque odit ipsa sapiente consequatur quas consequuntur voluptate!</h5>
        </div>

        <div className="img-con order-0 order-md-1">
          <img
            src="https://static.wixstatic.com/media/2e2a49_c8de1e6e955d459aa01defe9f5971dad~mv2.jpg/v1/fill/w_611,h_646,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2e2a49_c8de1e6e955d459aa01defe9f5971dad~mv2.jpg"
            alt="campus"
          />
        </div>
        <div className=' order-0 oder-md-1'>   <div className='quote'>
          <h2>Vision
        </h2><h5 className='quote-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora velit corporis molestias, eaque odit ipsa sapiente consequatur quas consequuntur voluptate!</h5>
        </div></div>
  
  
      </div> <div className="quote text-center">
        <h1>Staff Directory</h1>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tenetur, dolores magni
          necessitatibus aliquid optio, quaerat libero sequi vitae harum ad veniam.
        </h4>
      </div>
    </>
  );
};

export default About;
