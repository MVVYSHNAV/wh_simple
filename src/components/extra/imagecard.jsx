import React from 'react';

const ImageCard = ({ children, imgSrc, ...props }) => {
  return (
    <div
      {...props}
      className="relative overflow-hidden rounded-2xl shadow-lg group 
                 w-full aspect-square md:aspect-auto md:h-[400px] lg:h-[450px]"
    >
      <img
        src={imgSrc}
        alt="Team member"
        className="transition-transform group-hover:scale-110 duration-300 
                   w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-5">
        <div className="text-white p-4">{children}</div>
      </div>
    </div>
  );
}

export default ImageCard;