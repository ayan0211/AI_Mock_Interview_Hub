import { getTechLogos } from '@/lib/utils'
import React from 'react'
import Image from 'next/image'

const DisplayTechIcons = async ({techstack} : TechIconsProps) => {
    const techIcons = await getTechLogos(techstack) ; 

  return (
    <div className='flex flex-row'>
      {techIcons.slice(0, 3).map(({tech, url},index) => (
        <div key = {tech} className='relative group bg-dark-300 rounded-full p-2 flex-center'>
            <span className='tech-tooltip'> {tech}</span>
            <Image src={url} alt={tech} width={1000} height={100} className='size-5' />

           
             </div>
      ))}</div>
  )
}

export default DisplayTechIcons
