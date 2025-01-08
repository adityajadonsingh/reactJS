

const ExerciseCard = (props) => {
  return (
    <>
     <div className="w-1/3 p-3">
        <div className="card border rounded py-4 px-4 h-full">
            <img src={props.data.gifUrl} className="w-full h-auto mb-4" alt="" />
            <h2 className="font-bold text-2xl text-[#df9308] capitalize">{props.data.name}</h2>
            <span className="block font-bold my-2 text-[#464646] capitalize">For {props.data.bodyPart} (Main)</span>
            <div className="flex gap-x-2">
              <span className="block font-bold text-m text-[#464646] text-nowrap">Secondary Muscles :</span>
              <div className="flex items-center flex-wrap gap-2">
                {
                  props.data.secondaryMuscles.map((item, idx)=>{
                    return <span key={`${idx}_secondaryMus`} className="block px-2 py-1 rounded-full text-xs bg-[#df9308] capitalize">{item}</span>
                  })
                }
              </div>
            </div>
            <button onClick={()=> props.getIdx(props.data.id)} className="block bg-[#df9308] mt-4 py-2 px-4 rounded font-bold text-white">More Info</button>
        </div>
     </div> 
    </>
  )
}

export default ExerciseCard
