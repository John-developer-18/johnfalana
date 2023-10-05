import {Typewriter} from 'react-simple-typewriter'
import Zoom from 'react-reveal/Zoom'
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
function About() {
  return (
    <div>
     <Zoom>
     <div className="flex md:flex-row flex-col gap-7  md:justify-between min-h-screen px-5 md:items-center ">
        <div className=" bg-myY w-full md:w-1/2 flex flex-col md:items-start items-center gap-5 md:justify-center">
        <p className="text-xl text-myYellow bg-myYellow/20 self-center md:self-start px-3 py-1 rounded-lg relative"><span className="">👋</span>Hi There I am John</p>
         <p className='text-black/70 font-semibold text-6xl hover:text-myYellow/50 cursor-pointer transition duration-500 ease-in-out'>{"I'm a"}</p>
         <p className="text-myYellow">
         <span className='text-myYellow text-4xl'>
          <Typewriter
            words={[' Front-End Dev', 'Musician', ' ML Enthusiast']}
            loop={false}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        </p>
        <div className='flex gap-3 mt-8 text-4xl text-myYellow'>
          <IoLogoGithub/>
          <IoLogoLinkedin/>
          <IoLogoInstagram/>
          <IoLogoTwitter/>
        </div>
        </div>
        <div className="rounded-xl cursor-pointer">
          <img className="w-full rounded-full transition duration-500 ease-in-out hover:drop-shadow-rxl" src="../public/assets/me.png" alt="" />
        </div>
      </div>
     </Zoom>
      
    </div>
  )
}

export default About
