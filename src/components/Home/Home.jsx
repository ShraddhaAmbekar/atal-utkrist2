import React from 'react';
import './Home.css';


const Home = () => {
  return (
    <>
      <div className='hero-banner'>
        <div className='welcome'><h2>Welcome to our college</h2></div>
        <img src="/assets/banner.jpg" alt="banner" />

      </div>
      <div className='quote text-center'>
        <h1>SAFETY MEASURES IN PLACE</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, </p>
        <span> aliquam. Lorem ipsum dolor sit amet Temporibus, excepturi!</span>
      </div>

    <div className="container information">
          <div >
            <img className="img-con"
              src="/assets/info1.jpg"
              alt="info1"
            />
          </div>
          <div className='quote'>
            <h2>Rural Roots, Global Reach

            </h2><h5 className='quote-text'>Atal Utkrisht Government Inter College, Shrikot (Chinyalisaur, Uttarkashi) is redefining rural education with CBSE-affiliated, English-medium excellence. Our smart classrooms, labs, and library rival private schools, while sports, arts, and digital literacy spark every student’s potential. Inspired by Atal Bihari Vajpayee’s vision, we empower local youth to learn, lead, and build a brighter Himalayan future.
</h5>
          </div>

          <div className="order-0 order-md-1">
            <img className="img-con"
              src="/assets/info2.jpg" alt='info2'
            />
          </div>
          <div className='order-0 oder-md-1'>   
            <div className='quote'>
            <h2>About Us
            </h2><h5 className='quote-text'>Atal Utkrisht Government Inter College, Shrikot—established in 1986 under Uttarakhand’s Education Department—is a proud CBSE-affiliated institution (Affiliation No. 3520105) delivering dual-medium (Hindi & English) excellence. From high-school roots in Hindi, English, Sanskrit, Sciences, Social Sciences, Arts & IT, to our current intermediate offerings in Humanities, Sciences, and Commerce, we’re driven by a legacy of continuous upliftment. As an “Atal Utkrisht” school, we fuse state-of-the-art classrooms, expert faculty, and holistic development to forge leaders of tomorrow


</h5>
          </div>
          </div>
          <div className="order-md-1">
            <img className="img-con"
             src="/assets/info3.jpg"
              alt="info3"
            />
          </div>
          <div className='quote order-md-1'>
            <h2>What sets AUGIC Shrikot apart?

            </h2><h5 className='quote-text'>At Atal Utkrisht Government Inter College, Shrikot, our distinction lies in the powerful blend of heart, heritage, and innovation. Our expert educators not only teach—they mentor and nurture each student with care and vision. We offer dynamic learning environments equipped with digital tools, scientific labs, and inclusive practices that support every learner. Rooted in tradition yet embracing technology, we ensure a balanced educational journey. With small cohorts, we cultivate personal attention and big dreams. More than just a school, AUGIC Shrikot is a community built on empathy, action, and purpose. Here, we don’t just educate—we empower, enlighten, and elevate</h5>
          </div>

        </div>
      <hr className="custom-hr" />

      <div className='container-fluid gallery-container'>
        <div className='container'>
          <h2>Life & Culture</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <div className="gallery">

            {[
              "01.jpg",
              "02.jpg",
              "03.jpg",
              "04.jpg",
              "05.jpg",
              "06.jpg",
              "07.jpg",
              "08.jpg"
            ].map((img, index) => (
              <div className="gallery-item" key={index}>
                <img
                  src={`/assets/home-gallery/${img}`}
                  alt={`Image ${index + 1}`}
                />
                <div className="overlay">

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>



      <div className='container principal-section d-flex flex-md-row flex-column'>
        <div className='principal-msg'>
          <h2>
            About principal
          </h2>
          <p>Every man is the artisan of his fortune.
I firmly believe that a school should serve as a powerful tool for
character development. Our mission is to equip students with
the latest knowledge and the competitive edge, instilling both
academic excellence and essential human qualities. Our vision
extends beyond academics; it aims to create a just, sensitive,
and progressive society, fostering care and collaboration.
In today's world, a school must contribute positively to the
academic vitality of its environment. We believe that education
is not just about grades but about producing critical thinkers
and compassionate individuals. Education should focus on
holistic development and teach students what it truly means
to be human 
Our commitment is to honor the needs and interests of each
child, ensuring their present growth while safeguarding the
legitimate concerns of the future. With dedication and
teamwork, we will strive to turn this vision into a reality.</p>
        </div>
        <img className="img-fluid" src="/assets/principal-image.jpg" alt="principal" />
      </div>

    </>
  )
}

export default Home
