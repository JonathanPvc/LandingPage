import React from 'react'

import image from "../../../assets/img/weekw.png";

import "./styles.scss"


const NavBar = (props) => {
  const {scrollPosition} = props
  
  const className = ['container_navbar']
  
  if(scrollPosition >= 1800){
    className.push('image-reduce-navbar')
  }else{
    className.length === 2 && className.pop()
  }
  return (
    <>
  
      <div className={className.join(' ')}>
      <span className="burger-form-logo">
        <img src={image} alt="logo" />
      </span>

      <p className='numberphone '> 800 343 - 34.34 </p>
   
      </div>
    </>
  )
}

export default NavBar