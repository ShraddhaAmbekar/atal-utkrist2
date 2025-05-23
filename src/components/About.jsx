import React from 'react';
import './Other.css';
import StatSection from './Home/StatSection';

const About = () => {
  return (
    <>
      <div className="text1 quote text-center">
        <h1>About Us</h1>
        <h4>
         At Atal Utkrisht Government Inter College, Shrikot, our strength lies in Expert Faculty—seasoned teachers dedicated to your success. We foster Holistic Growth, blending character, leadership, and ethics into every lesson
        </h4>
      </div>

      <div className="container information">
        <div>
          <img className="img-con"
            src="/assets/mission.png"
          />
        </div>
        <div className='info-content'>
          <h2>Mission
        </h2><h5 className='quote-text'>At Atal Utkrisht Government Inter College, Shrikot, our mission is to empower students with a future-ready education rooted in values, innovation, and community impact. We aim to nurture well-rounded individuals through quality learning in science, arts, and technology while instilling leadership, responsibility, and cultural pride. Guided by a committed team of educators, we create an inclusive environment that supports personal growth and unlocks every student’s true potential. As a cornerstone of learning in Uttarkashi’s remote region, we strive to bridge educational gaps and shape confident, compassionate citizens prepared to lead and inspire in a changing world.
</h5>
        </div>

        <div className="order-0 order-md-1">
          <img className="img-con"
         src="/assets/vision.png"
            alt="vision"
          />
        </div>
        <div className=' order-0 oder-md-1'>   <div className='quote info-content'>
          <h2>Vision
        </h2><h5 className='quote-text'>To shine as a guiding light of transformative education in the heart of the Himalayas—empowering young minds to become thoughtful, future-ready leaders who embrace progress while honoring their roots. We envision shaping a generation of learners who thrive with knowledge, lead with integrity, innovate with purpose, and contribute meaningfully to their communities and beyond. Our goal is to build a nurturing space where tradition meets forward-thinking, and where students grow into changemakers of tomorrow.</h5>
        </div></div>
  
  
      </div> <div className="quote text-center">
        <h1>Staff Directory</h1>
        <h4>
     Our staff directory showcases the talented educators and support personnel who make our community thrive. With their expertise, passion, and dedication, they help shape the future every day.
        </h4>
      </div>
      <div>
        <StatSection/>
      </div>
    </>
  );
};

export default About;
