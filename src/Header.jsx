import {HiMenuAlt3} from 'react-icons/hi'
import {RiMenu5Line} from 'react-icons/ri'
import {useState, useEffect} from 'react'
import {IoMdClose} from 'react-icons/io'
import { useRef } from 'react'
function Header(){
  const navRef = useRef();
  const showNav = () => {
    navRef.current.classList.toggle('block');
  }
  const [showHeader, setShowHeader] = useState(true);

  
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
  };
  useEffect(()=>{

  })

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClasses = showHeader
  ? 'z-40 fixed top-0 left-0 right-0 w-full  mb-11 lg:hidden flex items-center md:justify-center justify-end px-5 py-5 visible transition-transform'
  : 'z-40 fixed top-0 left-0 right-0 w-full bg-black/5 backdrop-blur-lg mb-11 lg:hidden flex items-center md:justify-center justify-end px-5 py-3 visible transition-transform'  
  return(
        <div className={headerClasses}>
          <HiMenuAlt3 onClick={showNav}className='text-6xl font-bold text-myYellow md:hidden'/>
          <RiMenu5Line onClick={showNav} className='text-6xl font-bold text-myYellow hidden md:block'/>
          {/* <ul className='hidden md:flex justify-between w-1/2 text-myYellow text-2xl py-3'>
            <li><a href="#">About</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Contact</a></li>
          </ul> */}
          <div className='bg-myYellow top-0 bottom-0 left-32 right-0 fixed hidden'>
          <div className='flex justify-end p-6'><IoMdClose className='text-6xl font-bold'/></div>
          <div className='h-full grid place-content-center'>
            <ul className='space-y-10 text-center'>
              <li className='text-4xl font-bold'>About</li>
              <li className='text-4xl font-bold'>Skills</li>
              <li className='text-4xl font-bold'>Contact</li>
            </ul>
          </div>
          </div>
        </div>
        
    )
}
export default Header;