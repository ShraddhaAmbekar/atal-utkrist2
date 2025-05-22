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

<div  className="row"> 
  <div  className="column">
    <img src="/assets/gallery/01.jpg"  alt='01' />
      <img src="/assets/gallery/02.jpg"  alt='02' />
       <img src="/assets/gallery/03.jpg"  alt='03' />
     
   
      

    
  </div>
  <div  className="column">
    <img src="/assets/gallery/08.jpg"  alt='08' />
        <img src="/assets/gallery/10.jpg"  alt='10' />
    

  </div>  
  <div  className="column">
  <img src="/assets/gallery/06.jpg"  alt='06' />
      <img src="/assets/gallery/07.jpg"  alt='07' />

  </div>
 <div  className="column">
  <img src="/assets/gallery/04.jpg"  alt='04' />
       <img src="/assets/gallery/05.jpg"  alt='05' />
       
    
  </div>  
</div>
    </>
  )
}

export default Gallery
