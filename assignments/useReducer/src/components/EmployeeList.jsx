const EmployeeList = (props) => {


  return (
    <>
      <div className="card w-full py-6 px-6">
        <h2 className="mb-3 text-bold text-xl text-center">Employees List</h2>
        <hr />
        <ul className="list mt-5 flex flex-col gap-y-4 pr-3">
          {props.employees.map((item, idx) => {
            const isAdded = props.addedEmployee.includes(item.id);
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
                  {isAdded ? (
                    <button
                      disabled
                      className="addBtn disable"
                    >
                      Add
                    </button>
                  ) : (
                    <button
                      onClick={() => props.dispatch({ type: "ADD_TO_TEAM", payload: item })}
                      className="addBtn"
                    >
                      Add
                    </button>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default EmployeeList;
