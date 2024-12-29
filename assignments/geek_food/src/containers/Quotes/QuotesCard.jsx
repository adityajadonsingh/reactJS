
const QuotesCard = ({ text, authorName }) => {
  return (
    <>
        <div className="card w-full py-5 px-5 rounded bg-[#1f2937] my-8">
            <p className="text-white text-center text-2xl mb-3 font-bold">{text}</p>
            <span className="text-[#9097a3] text-center block">{authorName}</span>
        </div>
    </>
  )
}

export default QuotesCard