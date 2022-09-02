
import "./styles.scss"

import React from 'react'
import im1 from '../../../assets/img/Coupleofbeers.png'

const BeerCarrosel = () => {
  return (
    
     <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={im1} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="../../../assets/img/Trigobeer.png" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="../../../assets/img/backgroundtwo.png" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    
  )
}

export default BeerCarrosel
