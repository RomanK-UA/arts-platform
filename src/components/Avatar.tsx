import React from 'react'
import Image from 'next/image'

const Avatar = ({src, alt, width, height}: {src: string, alt: string, width: number, height: number}) => {
  return (
      <Image className="rounded-full border-2 border-secondary hover:border-green-600 transition:border-green-600 duration-300" src={src} alt={alt} width={width} height={height} /> 

  )
}

export default Avatar
