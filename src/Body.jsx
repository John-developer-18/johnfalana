import Rotate from 'react-reveal/Rotate'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import Fade from 'react-reveal/Fade'
import Header from './Header'
function Body() {
  
  return (
    <div className="bg-gradient-to-b from-black/95 to-black/90 flex-[2_2_0%] min-h-[2000px] lg:ml-[15rem] font-Mont">
      <Header/>
      <About/>
      <Fade
        duration = {5000}
      >
        <Skills/>
      </Fade>
      <Rotate top left>
        <Contact/>
      </Rotate>
      
      
    </div>
  )
}
export default Body
