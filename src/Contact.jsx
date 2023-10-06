import {IoLogoFacebook, IoLogoGithub, IoLogoLinkedin, IoLogoInstagram} from 'react-icons/io'

function Contact() {
  return (
    <div className="px-5 py-2 min-h-screen grid place-content-center"id='contact'>
      <h1 className="text-white font-semibold text-3xl text-center">Contact <span className="text-myYellow">Me</span></h1> 
      <div className='flex justify-center text-myYellow text-4xl gap-5 mt-7'>
          <a target='_blank' rel='noreferrer' href="https://github.com/John-developer-18"><IoLogoGithub className='cursor-pointer'/></a>
          <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/falana-john-a0a62b191/"><IoLogoLinkedin className='cursor-pointer'/></a>
          <a target='_blank' rel='noreferrer' href="https://www.instagram.com/john_thedeveloper/"><IoLogoInstagram className='cursor-pointer'/></a>
          <a target='_blank' rel='noreferrer' href="https://www.facebook.com/john.falana.777/"><IoLogoFacebook className='cursor-pointer'/></a>
      </div>

    </div>
  )
}

export default Contact
