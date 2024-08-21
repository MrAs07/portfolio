import { motion } from 'framer-motion'
import { BIO } from '../constants'


const Bio = () => {
  return (
    <div>
      <section className='flex max-w-4xl flex-col gap-12 pt-20' id="bio">
        <motion.h2 
          initial={{opacity:0,y:-30}}
        whileInView={{opacity:1,y:0}}
        transition ={{duration:1.5}}
        className='text-center text-3xl lg:text-4xl'> Bio</motion.h2>
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition ={{duration:1.2,delay:0.4}}>

            {BIO.map((bio,index)=>(
                <motion.p
                initial={{opacity:0,x:-30}}
        whileInView={{opacity:1,x:0}}
        transition ={{duration:1.1, delay:index*0.5}}
                 key={index} className="mb-4 text-lg lg:text-xl">
                {/* {console.log(bio)} */}
                    {bio}
                </motion.p>
            ))}
        </motion.div>
      </section>
    </div>
  )
}

export default Bio
