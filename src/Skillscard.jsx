function Skillscard(props) {
  return (
    <div className="h-56 hover:h-60 transition-all ease-in-out duration-[0.5s] flex flex-col items-center border-[1px] border-myYellow justify-center rounded-lg cursor-pointer shadow-rxl">
      <img className="w-28" src={props.img} alt="" />     
    </div>
  )
}

export default Skillscard
