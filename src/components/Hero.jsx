import { HERO } from '../constants'
import carlImg from "../assets/carl.jpeg"
import {motion} from "framer-motion"
const Hero = () => {
  return (
    <section className='flex min-h-screen flex-wrap items-center'>
  
      <div className='w-full md:w-1/2'>
    {/* // apply framer motion */}
      <motion.div
      initial = {{opacity:0 ,x:-75 ,y:-45}}
      animate ={{opacity:1 ,x:0,y:0}}
      transition={{duration:3}}>

        <h2 className='my-9 mt-20 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]'>
            {HERO.name}
        </h2>
        <p className='p-2 text-3xl tracking-tighter lg:text-4xl'>
        {HERO.greet}
        </p>
        <p className='mb-8 p-2 text-xl'>
            {HERO.description}
        </p>
      </motion.div>
      </div>
        <motion.div 
        initial ={{opacity:0,scale:0.6}}
        animate ={{opacity:1,scale:1}}
        transition={{duration:2}}
        className='w-full md:w-1/2 lg:p-8'>
            <div className='flex justify center'>
                <motion.img 
                initial={{opacity:0}}
                animate ={{opacity:1}}
                transition={{duration:2}}
                src={carlImg} 
                width={550} 
                height={550} 
                alt="Profile Pic" className='rounded-3xl'></motion.img>
            </div>
        </motion.div>
    </section>
  )
}

export default Hero
