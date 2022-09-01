import React from 'react'

import { Logos } from '../../components/atoms/Logos'
import CardPageTwo from '../../components/molecules/CardPageTwo'
import { informationLogos } from '../../components/molecules/CardPageTwo/constants'
import "./styles.scss"

const InformationHomeTwo = () => {
  return (
    <div className='container_pageinformation'>
    

      <CardPageTwo />

      <div className="container_logos-page" >
   
   {
       informationLogos.map(item => <Logos {...item} />)
   }


 </div>
    </div>
  )
}

export default InformationHomeTwo