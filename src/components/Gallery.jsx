import React from 'react'

const Gallery = () => {
  return (
    <>
          <div className="text1 quote text-center container-fluid">
          <h1>Gallery</h1>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos 
          </h4>
        </div>

<div  className="row mb-5"> 
  <div  className="column">
    <img src="/assets/gallery/blue-01.jpg"  alt='01' />
      <img src="/assets/gallery/yellow-02.jpg"  alt='02' />
       <img src="/assets/gallery/blue-02.jpg"  alt='03' />
     
   
      

    
  </div>
  <div  className="column">
    <img src="/assets/gallery/yellow-01.jpg"  alt='08' />
     <img src="/assets/gallery/blue-03.jpg"  alt='03' />
        <img src="/assets/gallery/yellow-03.jpg"  alt='10' />
    

  </div> 

  <div  className="column">
 <img src="/assets/gallery/blue-05.jpg"  alt='03' />
       <img src="/assets/gallery/yellow-05.jpg"  alt='05' />
       
    
  </div>   
  <div  className="column">
  <img src="/assets/gallery/yellow-04.jpg"  alt='06' />
      <img src="/assets/gallery/blue-04.jpg"  alt='03' />

  </div>
 
</div>
    </>
  )
}

export default Gallery
