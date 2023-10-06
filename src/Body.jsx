import Rotate from 'react-reveal/Rotate'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import Fade from 'react-reveal/Fade'
import Header from './Header'
import {BsFillHandIndexFill} from 'react-icons/bs'
import {Link} from 'react-scroll'


function Body() {

  return (
    <div className="bg-gradient-to-b from-black/95 to-black/90 flex-[2_2_0%] min-h-[2000px] lg:ml-[15rem] font-Mont">
      <Header/>
      <div className='mt-[84px] md:mt-0'>
      <About/>
      <Fade>
        <Skills/>
      </Fade>
      <Rotate top left>
        <Contact/>
      </Rotate>
      <div className='fixed bottom-5 right-5 bg-myYellow p-2 rounded-full'>
       <Link activeClass="active" to="about" spy={true} smooth={true} offset={-84} duration={1000} delay={0}><BsFillHandIndexFill className='text-myGrey text-2xl'/></Link> 
      </div>
      
      </div>
      
      
      
    </div>
  )
}
export default Body
