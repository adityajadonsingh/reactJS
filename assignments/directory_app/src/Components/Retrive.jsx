import { useState, useEffect } from "react";

const Retrieve = () => {
  // Fetch local data from localStorage
  const localData = JSON.parse(localStorage.getItem("users")) || [];
  const [userData, setUserData] = useState(localData); // To display the data
  const [searchQuery, setSearchQuery] = useState(''); // For search input

  // Handle search input change
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter the data based on Aadhar Number
    if (query) {
      const filteredData = localData.filter(user =>
        user.aadharNumber.includes(query)
      );
      setUserData(filteredData); // Update the displayed data
    } else {
      setUserData(localData); // Show all data if query is empty
    }
  };

  // Calculate age from date of birth
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

  return (
    <>
      <section className="banner bg-[url('https://code-theme.com/html/listifind/images/bg/people.jpg')] bg-no-repeat bg-cover w-100 before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-[#6551e8c1] relative">
        <div className="container mx-auto relative z-20 h-full w-full flex justify-center">
          <div className="w-4/5 mt-32">
            <h1 className="text-center font-bold text-5xl mb-10 text-white">
              People Directory
            </h1>
            <div className="getInput mb-10 flex gap-x-5 items-center">
              <label htmlFor="find" className="text-white font-bold text-2xl">Search:</label>
              <input
                type="text"
                className="rounded w-1/3 py-2 px-3 outline-0"
                placeholder="Search by Aadhar Number..."
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
            <hr />

            {userData.length > 0 ? (
              <table className="table-auto w-full detail-table text-white mt-10">
                <thead className="bg-[#6400c1] text-lg">
                  <tr>
                    <th>Name</th>
                    <th>Date of Birth</th>
                    <th>Aadhar Number</th>
                    <th>Mobile Number</th>
                    <th>Age</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.map((user, index) => (
                    <tr key={index}>
                      <td>{user.fullName}</td>
                      <td>{user.dob}</td>
                      <td>{user.aadharNumber}</td>
                      <td>{user.mobileNumber}</td>
                      <td>{calculateAge(user.dob)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center text-white text-xl">No data found</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Retrieve;
