import {Typewriter} from 'react-simple-typewriter'
import Zoom from 'react-reveal/Zoom'
import { IoLogoFacebook, IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";

function About() {
  return (
    <div>
     <Zoom>
     <div id="about" className="flex pt-7 md:pt-0 md:flex-row flex-col gap-7  md:justify-between min-h-screen px-5 md:items-center ">
        <div className=" bg-myY w-full md:w-1/2 flex flex-col md:items-start items-center gap-5 md:justify-center">
        <p className="text-xl text-myYellow bg-myYellow/20 self-center md:self-start px-3 py-1 rounded-lg relative"><span className="">👋</span>Hi There I am John</p>
         <p className='text-myYellow/75 text-6xl hover:text-myYellow/50 cursor-pointer transition duration-500 ease-in-out'>{"I'm a"}</p>
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
          <a target='_blank' rel='noreferrer' href="https://github.com/John-developer-18"><IoLogoGithub className='cursor-pointer'/></a>
          <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/falana-john-a0a62b191/"><IoLogoLinkedin className='cursor-pointer'/></a>
          <a target='_blank' rel='noreferrer' href="https://www.instagram.com/john_thedeveloper/"><IoLogoInstagram className='cursor-pointer'/></a>
          <a target='_blank' rel='noreferrer' href="https://www.facebook.com/john.falana.777/"><IoLogoFacebook className='cursor-pointer'/></a>
        </div>
        </div>
        <div className="rounded-xl cursor-pointer">
          <img className="moving-image w-full rounded-full transition duration-500 ease-in-out md:hover:drop-shadow-rxl" src="assets/me.png" alt="" />
        </div>
      </div>
     </Zoom>
      
    </div>
  )
}

export default About
