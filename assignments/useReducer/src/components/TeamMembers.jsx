
const TeamMembers = (props) => {
  return (
    <>
      <div className="card w-full py-6 px-6 team-list">
        <h2 className="mb-3 text-bold text-xl text-center">Team List</h2>
        <hr />
        <ul className="list mt-5 flex flex-col gap-y-4 pr-3">
          {props.employees.map((item, idx) => {
            return (
                <li
                key={idx}
                className="flex justify-between items-center rounded"
              >
                <div className="w-3/5">
                  <div className="flex gap-x-2">
                    <span className="text-lg">{item.first_name}</span>
                    <span className="text-lg">{item.last_name}</span>
                  </div>
                </div>
                <div className="w-1/5 flex justify-center">
                  <div className="text-lg font-bold">{item.age}</div>
                </div>
                <div className="w-1/5 flex justify-center">
                  <button
                    onClick={() =>
                      props.dispatch({ type: "REMOVE_FROM_TEAM", payload: item })
                    }
                    className="removeBtn"
                  >
                    Remove
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <hr className="my-3" />
        <div className="flex item-center px-3">
            <div className="w-3/5 flex gap-x-2 items-center">
                <span className="text-xl font-bold">Average Age : </span>
                <span className="text-xl">{props.averageAge}</span>
            </div>
            <div className="w-2/5">
                <button onClick={()=> props.dispatch({type:"SORT", payload:props.employees})} className="sort">Sort By Age</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default TeamMembers
