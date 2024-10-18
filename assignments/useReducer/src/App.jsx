import { useReducer } from "react";
import "./App.css";
import EmployeeList from "./components/EmployeeList";
import TeamMembers from "./components/TeamMembers";
import EmployeesJson from "./static/emolyeesList.json";

const App = () => {
  const reducerFunction = (state, action) => {
    const calculateAverageAge = (newList) => {
      console.log(newList);
      const average = (
        newList.reduce((pv, cv) => pv + cv.age, 0) / newList.length
      ).toFixed(2);
      return newList.length < 2 ? 0 : average;
    };
    switch (action.type) {
      case "ADD_TO_TEAM":
        const newAddedEmployeeList = [...state.teamList, action.payload];
        return {
          ...state,
          teamList: newAddedEmployeeList,
          addedEmployee: [...state.addedEmployee, action.payload.id],
          averageAge: calculateAverageAge(newAddedEmployeeList),
        };
      case "REMOVE_FROM_TEAM":
        const newRemoveEmployeeList = [
          ...state.teamList.filter((item) => item.id !== action.payload.id),
        ];
        return {
          ...state,
          teamList: newRemoveEmployeeList,
          addedEmployee: [
            ...state.addedEmployee.filter((item) => item !== action.payload.id),
          ],
          averageAge: calculateAverageAge(newRemoveEmployeeList),
        };
      case "SORT":
        return {
          ...state,
          teamList: action.payload.sort((a, b) => a.age - b.age),
        };
    }
  };

  const [state, dispatch] = useReducer(reducerFunction, {
    employeeList: EmployeesJson,
    teamList: [],
    averageAge: 0,
    addedEmployee: [],
  });
  return (
    <>
      <div className="container mx-auto mt-10">
        <h1 className="text-center text-3xl font-bold">Employee Team</h1>
        <hr className="my-10" />
        <div className="flex justify-evenly flex-wrap">
          <div className="w-2/5">
            <EmployeeList
              addedEmployee={state.addedEmployee}
              employees={state.employeeList}
              teamList={state.teamList}
              dispatch={dispatch}
            />
          </div>
          <div className="w-2/5">
            <TeamMembers
              averageAge={state.averageAge}
              employees={state.teamList}
              dispatch={dispatch}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
