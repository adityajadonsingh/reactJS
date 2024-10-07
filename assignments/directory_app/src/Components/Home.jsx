import { useState, useEffect } from "react";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [userData, setUserData] = useState({
    fullName: "",
    dob: "",
    aadharNumber: "",
    mobileNumber: "",
  });
  const [users, setUsers] = useState([]);

  // Toggle Popup
  const togglePopup = () => setShowPopup(!showPopup);

  // Handle form input change
  const getUserData = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const deleteUser = (indexToDelete) => {
    const updatedUsers = users.filter((_, index) => index !== indexToDelete);
    setUsers(updatedUsers); // Update state
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  console.log(userData)

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const updatedUsers = [...users, userData];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers)); 
    setUserData({ fullName: '', dob: '', aadharNumber: '', mobileNumber: '' });
    togglePopup();
  };

  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);
  return (
    <>
      <section className="banner bg-[url('https://code-theme.com/html/listifind/images/bg/people.jpg')] bg-no-repeat bg-cover w-100 before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-[#6551e8c1] relative">
        <div className="container mx-auto relative z-20 h-full w-full flex justify-center items-center">
          <div className="w-4/5">
            <h1 className="text-center font-bold text-5xl mb-10 text-white">
              People Directory
            </h1>
            {users.length > 0 ? (
        <table className="table-auto w-full detail-table text-white">
          <thead className="bg-[#6400c1] text-lg">
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
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.fullName}</td>
                <td>{user.dob}</td>
                <td>{user.aadharNumber}</td>
                <td>{user.mobileNumber}</td>
                <td>{calculateAge(user.dob)}</td>
                <td>
                  <button onClick={() => deleteUser(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <button onClick={togglePopup} className="add-data top-[60%] h-fit left-[50%] w-fit translate-x-[-50%] translate-y-[-100%]">
          + Add User
        </button>
      )}
          </div>
        </div>
        {users.length === 0 ? (<></>) : (
<button onClick={togglePopup} className="add-data">
+ Add User
</button>
        )
        }
        
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
            <form onSubmit={handleSubmit}>
              <div className="input w-full mt-5">
                <label htmlFor="fullName" className="block text-xl">
                  Full Name
                </label>
                <input
                required
                  type="text"
                  name="fullName"
                  className="block w-full mt-2 border py-2 px-5 rounded"
                  placeholder="Enter Your Full Name"
                  value={userData.fullName}
                  onChange={getUserData}
                />
              </div>
              <div className="input w-full mt-5">
                <label htmlFor="dob" className="block text-xl">
                  Date of Birth
                </label>
                <input
                required
                  type="date"
                  name="dob"
                  className="block w-full mt-2 border py-2 px-5 rounded"
                  value={userData.dob}
                  onChange={getUserData}
                />
              </div>
              <div className="input w-full mt-5">
                <label htmlFor="aadharNumber" className="block text-xl">
                  Aadhar Number
                </label>
                <input
                required
                  type="number"
                  name="aadharNumber"
                  className="block w-full mt-2 border py-2 px-5 rounded"
                  placeholder="Enter Your Aadhar Number"
                  value={userData.aadharNumber}
                  onChange={getUserData}
                />
              </div>
              <div className="input w-full mt-5">
                <label htmlFor="mobileNumber" className="block text-xl">
                  Mobile Number
                </label>
                <input
                required
                  type="number"
                  name="mobileNumber"
                  className="block w-full mt-2 border py-2 px-5 rounded"
                  placeholder="Enter Your Mobile Number"
                  value={userData.mobileNumber}
                  onChange={getUserData}
                />
              </div>
              <div className="input w-full mt-5">
                <input
                required
                  type="submit"
                  value="Save"
                  className="submit block w-full mt-2 border py-2 px-5 rounded"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
