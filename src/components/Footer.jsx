import React from 'react'
import { SOCIAL_MEDIA_LINKS } from '../constants'
import logo from "../assets/logo.png"
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <div className='mb-8 mt-20'>
        <div className='flex items-center justify-center'>
            <motion.img 
                initial={{opacity:0 }}
                whileInView={{opacity:1}}
                transition={{duration:1}}
            src={logo} width={200} className='my-20'/>
        </div>
        <div className='flex items-center gap-8'>
            {SOCIAL_MEDIA_LINKS.map((link,index)=>(
                <motion.a
                    initial={{opacity:0,y:35 }}
                    whileInView={{opacity:1,y:0}}
                    transition ={{duration:1.8,delay:index*0.3}}
                 key ={index} href={link.href} target ="_blank"
                rel='noopener noreferrer'>{link.icon}</motion.a>
            ))}
        </div>
        <motion.p
            initial={{opacity:0,x:-20 }}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1,delay:0.3}} 
        className='mt-8 text-center text-sm tracking-wide text-gray-400'>&copy;AS. All right reserved</motion.p>
      
    </div>
  )
}

export default Footer