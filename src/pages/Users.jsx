import React, { useEffect, useState } from "react";
import TableSection from "./TableSection";


const Users = () => {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([]);

  const [count, setCount] = useState(3);


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
        <div className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <div className="text-[20px] text-gray-800 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
            <div className="flex justify-between text-center">
          
              <div  className="pl-8 py-3">
                User
              </div>
              <div  className="pl-6 w py-3">
                City
              </div>
              <div  className="px-6  py-3">
                Company
              </div>
              <div className="px-14 py-3"></div>
            </div>
          </div>
          {
           
          }
          {users.slice(0, count).map((user, index) => (
         
            <TableSection 
              key={user.id + index}
              user={user}
            />
         
        
          ))}
        
     
         
        </div>
      
         {
          count >= users.length ? "" :
         
           <div className="text-center my-5">
            
            <button
             onClick={() => setCount(count + 3)}
            className="bg-red-500 z-10 px-4 py-1 rounded-md text-white cursor-pointer" >see more...</button>
           </div>
         }
      
      </div>
    </div>
  );
};

export default Users;
