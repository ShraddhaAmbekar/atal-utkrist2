import React from 'react';
import './Home.css';


const Home = () => {
  return (
    <>

      <div className='hero-banner'>
        <div className='welcome'><h2>Welcome to our college</h2></div>
        <img src="https://c8.alamy.com/comp/KX38GH/indian-group-school-students-friends-arms-crossed-standing-together-KX38GH.jpg" alt="" />

      </div>
      <div className='quote text-center'>
        <h1>SAFETY MEASURES IN PLACE</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, </p>
        <span> aliquam. Lorem ipsum dolor sit amet Temporibus, excepturi!</span>
      </div>

      <div className="container information">
        <div className="img-con">
          <img
            src="https://static.wixstatic.com/media/2e2a49_c8de1e6e955d459aa01defe9f5971dad~mv2.jpg/v1/fill/w_611,h_646,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2e2a49_c8de1e6e955d459aa01defe9f5971dad~mv2.jpg"
            alt="school"
          />
        </div>
        <div className='quote'>
          <h2>Village Roots, Global Ambitions: Atal Utkrisht GIC, Shrikot
        </h2><h5 className='quote-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora velit corporis molestias, eaque odit ipsa sapiente consequatur quas consequuntur voluptate!</h5>
        </div>

      
        <div className='order-1 order-md-0'>
          <div className='quote'>
            <h2>About Us
            </h2>
            <h5 className='quote-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora velit corporis molestias, eaque odit ipsa sapiente consequatur quas consequuntur voluptate!</h5>
          </div>
        </div>
          <div className="img-con order-0 order-md-1">
          <img
            src="https://static.wixstatic.com/media/2e2a49_c8de1e6e955d459aa01defe9f5971dad~mv2.jpg/v1/fill/w_611,h_646,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2e2a49_c8de1e6e955d459aa01defe9f5971dad~mv2.jpg"
            alt="campus"
          />
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
              "01.jpg",
              "07.jpg",
              "08.jpg",
              "07.jpg",
              "08.jpg",
              "08.jpg",
              "07.jpg"
            ].map((img, index) => (
              <div className="gallery-item" key={index}>
                <img
                  src={`https://wixmp-19e700b7666f74a00729a0dd.wixmp.com/Instagram/NYC_Public_School/${img}`}
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus explicabo eligendi sequi maiores similique laborum adipisci, error delectus, ab doloremque aspernatur! Dolorum nihil quod explicabo molestiae quaerat tenetur numquam consequuntur quas, dignissimos quasi, rem commodi voluptas. Commodi sapiente nostrum et.</p>
        </div>
        <img className="img-fluid" src="https://tse4.mm.bing.net/th?id=OIP.HAKOJRyfo1jKImPRC4mPKQHaLG&pid=Api&P=0&h=180" alt="" />
      </div>

    </>
  )
}

export default Home
