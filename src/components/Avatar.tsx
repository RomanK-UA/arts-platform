import React from 'react'
import Image from 'next/image'

const Avatar = ({src, alt, width, height}: {src: string, alt: string, width: number, height: number}) => {
  return (
      <Image className="rounded-full border-2 border-secondary hover:border-accent transition:border-accent duration-300 hover:cursor-pointer" src={src} alt={alt} width={width} height={height} /> 

  )
}

export default Avatar
