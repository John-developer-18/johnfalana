import {IoLogoFacebook, IoLogoTwitter, IoLogoGithub, IoLogoLinkedin, IoLogoInstagram} from 'react-icons/io'

function Contact() {
  return (
    <div className="px-5 py-2 min-h-screen grid place-content-center">
      <h1 className="text-white font-semibold text-3xl text-center">Contact <span className="text-myYellow">Me</span></h1> 
      <div className='flex justify-center text-myYellow text-4xl gap-5 mt-7'>
        <IoLogoGithub/>
        <IoLogoLinkedin/>
        <IoLogoInstagram/>
        <IoLogoTwitter/>
        <IoLogoFacebook/>
      </div>

    </div>
  )
}

export default Contact
