import { IoPersonSharp, IoSettingsSharp} from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
function Sidebar() {
  return (
    <div className="hidden lg:fixed top-0 bottom-0 w-60 bg-black lg:flex flex-col justify-center">
      {/* <div className="w-40 h-40 rounded-full bg-green-800">

      </div> */}
      <ul className="flex flex-col space-y-10 text-myYellow cursor-pointer font-Mont text-xl">
        <li className="hover:border-l-8 hover:border-myYellow pl-7"><IoPersonSharp className="inline-block mr-5"/>About</li>
        <li className="hover:border-l-8 hover:border-myYellow pl-7"><IoSettingsSharp className="inline-block mr-5"/>Skills</li>
        <li className="hover:border-l-8 hover:border-myYellow pl-7"><BsFillTelephoneFill className="inline-block mr-5"/>Contact</li>
      </ul>      
    </div>
  )
}

export default Sidebar
