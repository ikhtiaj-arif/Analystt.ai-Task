import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const url = `https://jsonplaceholder.typicode.com/users`;
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setUsers(data);
      console.log(data);
    };
    fetchData();
  }, [url]);

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg md:w-3/4 mx-auto mt-10 md:mt-20 lg:mt-24">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-[20px] text-gray-800 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4"></th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">
                City
              </th>
              <th scope="col" className="px-6 py-3">
                Company
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          {users.map((user, index) => (
            <tbody key={user.id + index}>
              <div className="h-6" />
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                <td className="w-4 p-4"></td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="pl-3">
                    <div className="text-base text-[18px] font-semibold">
                      {user.username}
                    </div>
                    <div className="font-normal text-gray-500">
                      {user.email}
                    </div>
                  </div>
                </th>
                <td className="px-6 text-[16px] font-medium text-white py-4">
                  {user?.address?.city}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center text-[16px] font-medium text-white">
                    {user?.company?.name}
                  </div>
                </td>
                <td className="px-6 py-4">
                    {/* <Link to={`https://jsonplaceholder.typicode.com/users/${user.id}`}>

                  <button className="btn btn-success">See Details</button>
                    </Link> */}
                </td>
              </tr>
              <div className="h-6" />
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Users;
