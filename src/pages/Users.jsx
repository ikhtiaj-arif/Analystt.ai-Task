import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TableSection from "./TableSection";
import UserDetails from "./UserDetails";

const Users = () => {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([]);

  const [count, setCount] = useState(3);
  console.log(count);

  const url = `https://jsonplaceholder.typicode.com/users`;
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setUsers(data);
  
      setLoading(false);
    };
    fetchData();
  }, [url]);


if(loading){
return <h2>loading</h2>
}

  return (
    <div>
      <div className="overflow-x-auto shadow-md sm:rounded-lg md:w-3/4 mx-auto mt-10 md:mt-20 lg:mt-24 ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <div className="text-[20px] text-gray-800 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
            <tr className="flex justify-between text-center">
          
              <th scope="col" className="pl-8 py-3">
                User
              </th>
              <th scope="col" className="pl-6 w py-3">
                City
              </th>
              <th scope="col" className="px-6  py-3">
                Company
              </th>
              <th scope="col" className="px-14 py-3"></th>
            </tr>
          </div>
          {
           
          }
          {users.slice(0, count).map((user, index) => (
         
            <TableSection 
              key={user.id + index}
              user={user}
            />
         
        
          ))}
        
     
         
        </table>
      
         {
          count < users.length 
          &&  
           <div className="text-center my-5">
            <button className="bg-red-500 px-4 py-1 rounded-md text-white" onClick={() => setCount(count + 3)}>see more...</button>
           </div>
         }
      
      </div>
    </div>
  );
};

export default Users;
