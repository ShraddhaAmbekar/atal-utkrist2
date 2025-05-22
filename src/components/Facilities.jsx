import React from 'react'

const Facilities = () => {
  return (
    <div>
      <>
        <div className="text1 quote text-center">
          <h1>Facilities</h1>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tenetur, dolores magni
            necessitatibus aliquid optio, quaerat libero sequi vitae harum ad veniam.
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
            </h2><h5 className='quote-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora velit corporis molestias, eaque odit ipsa sapiente consequatur quas consequuntur voluptate!</h5>
          </div>

          <div className="order-0 order-md-1">
            <img className="img-con"
                       src="/assets/class.jpg"
              alt="campus"
            />
          </div>
          <div className=' order-0 oder-md-1'>   <div className='info-content'>
            <h2>Classrooms
            </h2><h5 className='quote-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora velit corporis molestias, eaque odit ipsa sapiente consequatur quas consequuntur voluptate!</h5>
          </div>
          </div>
          <div className="order-md-1">
            <img className="img-con"
                    src="/assets/lab.jpg"
              alt="school"
            />
          </div>
          <div className='info-content order-md-1'>
            <h2>Laboratory
            </h2><h5 className='quote-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora velit corporis molestias, eaque odit ipsa sapiente consequatur quas consequuntur voluptate!</h5>
          </div>

        </div>


      </>
    </div>
  )
}

export default Facilities
