import React from "react";
import ToggleBtn from "../Components/ToggleBtn";
import useOpenControl from "../Hooks/OpenControl";
import UserDetails from "./UserDetails";
import Title from '../Components/Title';

const TableSection = ({ user }) => {

    const { open, toggle } = useOpenControl(false)

  return (
    <div className="w-full">
      <div className="h-2 " />
      <div className=" w-full flex justify-between border-b bg-gray-800 ">
        <div
         className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
        >
          <div className="pl-3">
            <div className="text-base text-[18px] font-semibold">
             <Title title={user.username} />
            </div>
            <div className="font-normal text-gray-400">{user.email}</div>
          </div>
        </div>
        <div className="px-6 text-[16px] font-medium text-white py-4">
        <Title title= {user?.address?.city} />
        </div>
        <div className="pl-10 py-4">
          <div className="flex items-center text-[16px] font-medium text-white">
          <Title title={user?.company?.name} />
          </div>
        </div>
        <div className="px-6 py-4">
          <ToggleBtn open={open} toggle={toggle} />
        </div>
      </div>
      {
        open ?   <tr className="overflow-x-auto w-screen shadow-md sm:rounded-lg md:w-3/4 mx-auto mt-10 md:mt-20 lg:mt-24">
        <UserDetails userDetails={user} />
      </tr> : <></>
      }
    
    </div>
  );
};

export default TableSection;
