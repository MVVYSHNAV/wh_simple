import React from 'react'
import  Logo  from '../../assets/logo.png'

const Footer = () => {
  return (
    <div  className="flex mx-auto p-4 mt-20 sm:mt-14 bg-black">
        <div>
            <img className='w-12 mt-2 sm:mt-4 mx-2 sm:mx-15' src={Logo} alt='brand logo'/>
         </div>
      <div className=' '>
      <h1 className='text-white text-lg sm:text-4xl font-Playfair font-bold mb-12 text-left mt-5 sm:mt-5 mx-3 sm:mx-6'>  WizardHorizon </h1>
      
      </div>
    </div>
  )
}

export default Footer
