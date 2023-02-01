import React from 'react';

const UserDetails = ({ userDetails }) => {
   
    console.log(userDetails);
    return (
        <div className='w-full bg-gray-800 pb-6 mx-auto'>
            <div className='mx-8 p-5 shadow-gray-700 shadow-md '>

            <h1>Description</h1>
            <p className='my-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, doloremque quae. Neque modi, adipisci tempora ipsam, doloremque natus fugiat itaque voluptatibus rem officia saepe eius tempore, unde earum perspiciatis sit harum reprehenderit consequuntur maiores illo quisquam excepturi quis similique! Repudiandae hic minus perspiciatis unde cumque labore, ex ad explicabo ea.</p>
            <div className='flex justify-evenly'>
                <div>
                   <h1> personal info</h1>
                   <div>
                   Name: {userDetails.name}
                   </div>
                   <div>
                    {userDetails.company.name}
                   </div>
                   <div>
                    {userDetails.company.bs}
                   </div>
                   <div>
                    {userDetails.email}
                   </div>
                   <div>
                    {userDetails.phone}
                   </div>
                   <div>
                    {userDetails.website}
                   </div>
                </div>
                <div className='block'>
                    <h1>address</h1>
                    <div>
                        {userDetails.address.street}
                    </div>
                    <div>
                        {userDetails.address.suite}
                    </div>
                    <div>
                        {userDetails.address.city}
                    </div>
                    <div>
                        {userDetails.address.zipcode}
                    </div>
                   
                    
                </div>
            </div>
            </div>
        </div>
    );
};

export default UserDetails;