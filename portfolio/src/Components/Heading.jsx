

const Heading = ({title, position, para}) => {
  return (
    <> 
      <div className={`${position} heading-div flex flex-col`}>
        <h2 className="text-white md:text-5xl text-3xl font-bold md:mb-5 mb-2">{title}</h2>
        <p className="text-[#dddddd] w-full text-center md:text-xl text-lg">{para}</p>
      </div>
    </>
  )
}

export default Heading
