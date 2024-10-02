

const Slider = ({type, mainHeading, value, handleChange, min, max, steps}) => {
  return (
    <div className="card w-full text-white">
        <span className="text block text-lg">{mainHeading}</span>
        
        {
            type === "value" ?  <span className="block text-4xl mt-2 font-bold mb-4">$ {value}</span> : <span className="block text-4xl mt-2 font-bold mb-4">% {value}</span>
        }
        <input type="range" onChange={handleChange} value={value} min={min} max={max} step={steps} className="block w-full" />
        
        {
            type === "value" ?  
            <div className="flex w-full justify-between mt-2">
                <div className="span block">$ {min}</div>
                <div className="span block">$ {max}</div>
            </div> 
            : 
            <div className="flex w-full justify-between mt-2">
                <div className="span block">% {min}</div>
                <div className="span block">% {max}</div>
            </div> 
        }
    </div>
  )
}

export default Slider