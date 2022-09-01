import React from 'react'
import { Logos } from '../../components/atoms/Logos';
import { BeerLogos } from './constants';
import "./styles.scss";




const OnlyBeer = () => {
  return (
    <div className='container_pague-only-beer'>

        <div className='text-only-beer'>
            <p className='text-color'>SED DO EIUSMOD</p>
        </div>

        <div className='incline-beer'>


        </div>

        <div className='icons_beers'>

        {
       BeerLogos.map(item => <Logos {...item} />)
   }

        </div>

    
    
    </div>
  )
}

export default OnlyBeer