import {HiMenuAlt3} from 'react-icons/hi'
import {RiMenu5Line} from 'react-icons/ri'
function Header(){
    return(
        <div className="w-full bg-black/10 mb-11 lg:hidden flex items-center md:justify-center justify-end px-5 py-5">
          <HiMenuAlt3 className='text-6xl font-bold text-myYellow md:hidden'/>
          <RiMenu5Line className='text-6xl font-bold text-myYellow hidden md:block'/>
          {/* <ul className='hidden md:flex justify-between w-1/2 text-myYellow text-2xl py-3'>
            <li><a href="#">About</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Contact</a></li>
          </ul> */}
        </div>
    )
}
export default Header;