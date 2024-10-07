import { useState } from "react";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [userList, setUserList] = useState([]);
  const userData = localStorage.getItem("userData");

  

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <>
      <section className="banner bg-[url('https://code-theme.com/html/listifind/images/bg/people.jpg')] w-100 before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-[#6551e8c1] relative">
        <div className="container mx-auto relative z-20 h-full w-full flex justify-center items-center">
          <div className="w-4/5">
            <h1 className="text-center font-bold text-5xl mb-10 text-white">
              People Directory
            </h1>
            <table className="table-auto w-full detail-table text-white">
              <thead className="bg-[#6400c1] text-lg ">
                <tr>
                  <th>Name</th>
                  <th>Date of birth</th>
                  <th>Aadhar Number</th>
                  <th>Mobile Number</th>
                  <th>Age</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Aditya Jadon</td>
                  <td>2024-10-02</td>
                  <td>666578767567</td>
                  <td>9876543210</td>
                  <td>23</td>
                  <td>
                    <button>Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <button onClick={togglePopup} className="add-data">
          + Add User
        </button>
      </section>

      {showPopup && (
        <div className="popup w-full h-full flex justify-center items-center absolute top-0 z-50">
          <div className="w-2/5 bg-white rounded py-10 px-10 relative">
            <span
              onClick={togglePopup}
              className="close-btn absolute top-[10px] right-[20px] text-3xl cursor-pointer"
            >
              X
            </span>
            <span className="block text-center text-2xl">Add User Details</span>
            <div className="input w-full mt-5">
              <label htmlFor="name" className="block text-xl">
                Full Name
              </label>
              <input
                type="text"
                className="block w-full mt-2 border py-2 px-5 rounded"
                placeholder="Enter Your Full Name"
              />
            </div>
            <div className="input w-full mt-5">
              <label htmlFor="name" className="block text-xl">
                Date of Birth
              </label>
              <input
                type="date"
                className="block w-full mt-2 border py-2 px-5 rounded"
              />
            </div>
            <div className="input w-full mt-5">
              <label htmlFor="name" className="block text-xl">
                Aadhar Number
              </label>
              <input
                type="number"
                className="block w-full mt-2 border py-2 px-5 rounded"
                placeholder="Enter Your Aadhar Number"
              />
            </div>
            <div className="input w-full mt-5">
              <label htmlFor="name" className="block text-xl">
                Mobile Number
              </label>
              <input
                type="number"
                className="block w-full mt-2 border py-2 px-5 rounded"
                placeholder="Enter Your Mobile Number"
              />
            </div>
            <div className="input w-full mt-5">
              <input
                type="submit"
                value={"Save"}
                className="submit block w-full mt-2 border py-2 px-5 rounded"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
