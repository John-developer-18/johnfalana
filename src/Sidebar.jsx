import {BrowserRouter} from 'react-router-dom'
import { IoPersonSharp, IoSettingsSharp} from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import {Link} from 'react-scroll'


function Sidebar() {
  return (
    <BrowserRouter>
    <div className="hidden lg:fixed top-0 bottom-0 w-60 bg-black lg:flex flex-col justify-center">
      {/* <div className="w-40 h-40 rounded-full bg-green-800">

      </div> */}
      <ul className="flex flex-col space-y-10 text-myYellow cursor-pointer font-Mont text-xl">
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={1000} delay={0} className="hover:border-l-8 hover:border-myYellow pl-7"><IoPersonSharp className="inline-block mr-5"/>About</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={0} duration={1000} delay={0} className="hover:border-l-8 hover:border-myYellow pl-7"><IoSettingsSharp className="inline-block mr-5"/>Skills</Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={1000} delay={0} className="hover:border-l-8 hover:border-myYellow pl-7"><BsFillTelephoneFill className="inline-block mr-5"/>Contact</Link>
      </ul>      
    </div>
    </BrowserRouter>
  )
}

export default Sidebar
