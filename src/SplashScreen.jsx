import { useState } from "react";
import {Typewriter} from 'react-simple-typewriter'

function SplashScreen() {
    const [loading, setLoading] = useState(true);

   
        setTimeout(()=>{
            setLoading(false)
        },18000) 

       const mySplash = loading ? 'min-h-screen bg-black fixed top-0 z-50 right-0 left-0 grid place-content-center':'hidden'
  return (
    <div className={mySplash}>
      <p className="text-6xl text-myYellow font-mono">
      <Typewriter
            words={['Good day Guys', 'My Director Good Afternoon Sir', 'Welcome to My World', 'Get Ready to Witness Greatness!', 'In 5.....4....3', 'Just Kidding 😂 ']}
            loop={false}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={20}
            delaySpeed={1000}
          />
      </p>
    </div>
  )
}

export default SplashScreen