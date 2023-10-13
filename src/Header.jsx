import {HiMenuAlt3} from 'react-icons/hi'
import {RiMenu5Line} from 'react-icons/ri'
import {useState, useEffect} from 'react'
import {IoMdClose} from 'react-icons/io'
import {Link} from 'react-scroll'
import { BrowserRouter } from 'react-router-dom'

function Header(){
 
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () =>{
    setIsOpen((open) => !open )
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
  
  const menuStyles = isOpen 
  ? "bg-myYellow top-0 left-0 right-0 fixed visble z-40 min-h-screen" 
  : "bg-myYellow top-0 left-0 right-0 fixed hidden z-40"
  return(
     <BrowserRouter>
        <div className={headerClasses}>
          <HiMenuAlt3 onClick={toggleMenu} className='text-6xl font-bold text-myYellow md:hidden cursor-pointer'/>
          <RiMenu5Line onClick={toggleMenu} className='text-6xl font-bold text-myYellow hidden md:block cursor-pointer'/>
          
          {
            isOpen?
            (
                <div className={menuStyles}>
                <div className='flex justify-end p-4'><IoMdClose onClick={toggleMenu} className='text-6xl font-bold text-black cursor-pointer'/></div>
                  <div className='min-h-screen grid place-content-center text-center'>
                  <ul className='space-y-10 flex flex-col'>
                    <Link onClick={toggleMenu} spy={true} smooth={true} offset={-84} duration={1000} delay={0} to="about" className='cursor-pointer text-3xl font-bold text-black'>About</Link>
                    <Link onClick={toggleMenu} spy={true} smooth={true} offset={-200} duration={1000} delay={0} to='skills' className='cursor-pointer text-3xl font-bold text-black'>Skills</Link>
                    <Link onClick={toggleMenu} spy={true} smooth={true} offset={0} duration={1000} delay={0} to='contact' className='cursor-pointer text-3xl font-bold text-black'>Contact</Link>
                  </ul>
                </div>
                </div>         
            ):
            (<div></div>)
          }

        </div>
      </BrowserRouter>   
    )
}
export default Header;