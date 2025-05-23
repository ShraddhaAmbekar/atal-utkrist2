import React from 'react'

const Facilities = () => {
  return (
    <div>
      <>
        <div className="text1 quote text-center">
          <h1>Facilities</h1>
          <h4>
            Smart classrooms to science labs, libraries to sports fields—our thoughtfully designed campus nurtures curiosity, creativity, and confidence in every student.
          </h4>
        </div>

        <div className="container information">
          <div>
            <img className="img-con"
              src="/assets/library.jpg"
              alt="library"
            />
          </div>
          <div className='info-content'>
            <h2>Library
            </h2><h5 className='quote-text'>The Library at Atal Utkrisht Government Inter College, Shrikot, is a hub of knowledge and learning. Equipped with a diverse collection of academic books, reference materials, newspapers, and magazines, it provides students with a quiet and resource-rich environment to enhance their studies. Our library is designed to support curriculum requirements and promote self-learning, curiosity, and a lifelong love for reading. With comfortable seating and a peaceful atmosphere, it’s a perfect space for students to focus, research, and grow intellectually.</h5>
          </div>

          <div className="order-0 order-md-1">
            <img className="img-con"
              src="/assets/class.jpg"
              alt="campus"
            />
          </div>
          <div className=' order-0 oder-md-1'>   <div className='info-content'>
            <h2>Classrooms</h2>
            <h5 className='quote-text'>The classrooms at Atal Utkrisht Government Inter College, Shrikot, are spacious, well-ventilated, and conducive to focused learning. Designed to provide a comfortable and motivating atmosphere, each classroom is equipped with essential teaching aids such as blackboards, seating arrangements, and natural lighting. Our teaching approach emphasizes interaction, engagement, and clarity, ensuring every student feels included and encouraged to participate actively in the learning process.</h5>
          </div>
          </div>
          <div className="order-md-1">
            <img className="img-con"
              src="/assets/lab.jpg"
              alt="school"
            />
          </div>
          <div className='info-content order-md-1'>
            <h2>Laboratory</h2>
            <h5 className='quote-text'>Our school features well-equipped Science Laboratories designed to give students hands-on experience and deepen their understanding of scientific principles. Whether it’s Physics, Chemistry, or Biology, each lab is furnished with modern apparatus, safety equipment, and practical resources to facilitate engaging experiments and demonstrations. Under the guidance of experienced faculty, students explore science beyond textbooks, sparking curiosity and encouraging innovation through observation, analysis, and experimentation.</h5>
          </div>
        </div>
      </>
    </div>
  )
}

export default Facilities
