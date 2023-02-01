import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TableSection from "./TableSection";
import UserDetails from "./UserDetails";

const Users = () => {
  
  const [users, setUsers] = useState([]);

  const [count, setCount] = useState(3);
  console.log(count);

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
      <div className="overflow-x-auto shadow-md sm:rounded-lg md:w-3/4 mx-auto mt-10 md:mt-20 lg:mt-24">
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
          count >= users.length ? '' 
          :
           <div className="text-center my-5">
            <button className="btn btn-error" onClick={() => setCount(count + 3)}>Load 3</button>
           </div>
         }
      
      </div>
    </div>
  );
};

export default Users;
