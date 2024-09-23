
const Card = ({review, client}) => {
  return (
    <div className="card w-2/6 p-5">
      <div className="review px-8 py-5 mb-5 rounded bg-[#f9fafb] shadow">
        <p>{review}</p>
      </div>
      <div className="client flex gap-x-5">
        <div className="img">
            <img className="rounded-full object-fit h-10 w-10" src={client.imgUrl} />
        </div>
        <div className="name">
            <span className="block font-bold">{client.clientName}</span>
            <span className="designation text-[#525252]">{client.designation}</span>
        </div>
      </div>
    </div>
  )
}

export default Card
