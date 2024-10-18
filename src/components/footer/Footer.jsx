import React from 'react';
import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mx-auto p-4 mt-20 sm:mt-14 bg-black">
      <div className="flex items-center mb-4 sm:mb-0">
        <img 
          className="w-12 sm:mx-6" 
          src={Logo} 
          alt="WizardHorizon brand logo"
        />
        <h1 className="text-white text-lg sm:text-4xl font-Playfair font-bold ml-3 sm:ml-6">
          WizardHorizon
        </h1>
      </div>
      <div>
        <p className="text-white text-center text-sm sm:text-xl sm:text-right">
          © 2024 wizardhorizon
        </p>
      </div>
    </div>
  );
}

export default Footer;


// import React from 'react'
// import Logo from '../../assets/logo.png'

// const Footer = () => {
//   return (
//     <div className="flex flex-col sm:flex-row justify-between items-center mx-auto p-4 mt-20 sm:mt-14 bg-black">
//       <div className="flex items-center mb-4 sm:mb-0">
//         <img 
//           className="w-12 sm:mx-15" 
//           src={Logo} 
//           alt="brand logo"
//         />
//         <h1 className="text-white text-lg sm:text-4xl font-Playfair font-bold ml-3 sm:ml-6">
//           WizardHorizon
//         </h1>
//       </div>
//       <div>
//         <p className="text-white text-center text-sm sm:text-xl sm:text-right">© 2024 wizardhorizon</p>
//       </div>
//     </div>
//   )
// }

// export default Footer;