const QuizCard = () => {
  return (
    <>
    <div className="w-full flex gap-x-2">
            <span className="block font-bold text-nowrap text-xl">Question 1.</span>
            <span className="block text-xl text-[#575757]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, maxime!</span>
        </div>
        <div className="options mt-5">
            <ul className="list-disc ml-10">
                <li className="my-2"><button className="bg-[#5e5ee6] hover:bg-[#6a6add] py-2 px-5 rounded text-white text-lg font-bold">Option</button></li>
                <li className="my-2"><button className="bg-[#5e5ee6] hover:bg-[#6a6add] py-2 px-5 rounded text-white text-lg font-bold">Option</button></li>
                <li className="my-2"><button className="bg-[#5e5ee6] hover:bg-[#6a6add] py-2 px-5 rounded text-white text-lg font-bold">Option</button></li>
                <li className="my-2"><button className="bg-[#5e5ee6] hover:bg-[#6a6add] py-2 px-5 rounded text-white text-lg font-bold">Option</button></li>
            </ul>
        </div>
      
    </>
  )
}

export default QuizCard
