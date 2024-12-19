import React from 'react'

interface ImageCardProps {
    imageSrc: string;
    imageTitle: string;
    createdAt: string;
};


const ImageCard = (props:ImageCardProps) => {
  return (
<div className="relative h-fit border-2 border-secondary group rounded-md">
  <img src={props.imageSrc} alt="image" className="w-full h-full object-cover rounded-md" />

  <div className="absolute bottom-0 z-50 w-full h-0 bg-amber-400 text-text flex items-center justify-center transition-all duration-300 overflow-hidden group-hover:h-1/3 opacity-70">
    <div className="p-4 text-text">
        <p>{props.imageTitle}</p>
        <p>{props.createdAt}</p>
    </div>
  </div>
</div>
  )
}

export default ImageCard
