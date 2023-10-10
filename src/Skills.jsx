import Skillscard  from "./Skillscard"
import skilsData from "./skilsData"
import Zoom from 'react-reveal/Zoom'
function Skills() {
  return (
    <div className="py-20">
      <Zoom>
       <h1 className="text-3xl text-center text-white font-semibold">Professional <span className="text-myYellow">Skillset</span></h1>
      </Zoom>
     <div className="min-h-screen px-20 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-y-10 md:gap-y-1 gap-x-5 py-16">
        <Zoom>
        {
            skilsData.map((item)=>{
              return(
                <Skillscard
                 {...item}
                 key={item.id}
                />
              )
            })
        }
        </Zoom>
        

      </div>
    </div>
  )
}

export default Skills
