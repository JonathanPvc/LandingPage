
import "./styles.scss"

import React from 'react'
import imgmain from '../../../assets/img/Coupleofbeers.png'

import imgbeer from '../../../assets/img/Trigobeer.png'


const BeerCarrosel = () => {
  return (
    
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" >
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2" class="active"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={imgmain}class="d-block" alt="2" />    
      </div>
      <div class="carousel-item">
        <img src={imgmain} class="d-block" alt="4" />
      </div>
      <div class="carousel-item">
        <img src={imgmain} class="d-block" alt="6"/>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
    
  )
}

export default BeerCarrosel
