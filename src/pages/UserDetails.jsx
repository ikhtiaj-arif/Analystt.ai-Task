import React from 'react';
import Text from '../Components/Text';
import Title from '../Components/Title';
import SubTitle from '../Components/SubTitle';

const UserDetails = ({ userDetails }) => {
   
    console.log(userDetails);
    return (
        <div className='w-full bg-gray-800 pb-6 mx-auto'>
            <div className='mx-8 p-5 shadow-gray-700 shadow-md '>

            <Title title="Description:"/> 
            <Text text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, doloremque quae. Neque modi, adipisci tempora ipsam, doloremque natus fugiat itaque voluptatibus rem officia saepe eius tempore, unde earum perspiciatis sit harum reprehenderit consequuntur maiores illo quisquam excepturi quis similique! Repudiandae hic minus perspiciatis unde cumque labore, ex ad explicabo ea."/>
            <div className='flex justify-evenly pt-3 pb-1'>
                <div className=''>
                <Title title="personal info:"/> 
                   <div className='py-2'>
                  <SubTitle title="Name:"/>
                 <Text text={userDetails.name}/>
                   {}
                   </div>
                   <div className='pt-2'>
                   <SubTitle title="Company:"/>
                   <Text text={userDetails.company.name}/>
                   </div>
                   <div className='pt-2'>
                   <SubTitle title="Designation:"/>
                   <Text text={userDetails.company.bs}/>
                   </div>
                   <div className='pt-2'>
                   <SubTitle title="Email:"/>
                   <Text text= {userDetails.email}/>
                   </div>
                   <div className='pt-2'>
                   <SubTitle title="Contact:"/>
                    <Text text={userDetails.phone}/>
                   </div>
                   <div className='pt-2'>
                   <SubTitle title="Portfolio:"/>
                    <Text text={userDetails.website}/>
                   </div>
                </div>
                <div className='block'>
                <Title title="address:"/> 
                    <div className='pt-2'>
                    <SubTitle title="Street:"/>
                    <Text text={userDetails.address.street}/>
                    </div>
                    <div className='pt-2'>
                    <SubTitle title="Suit:"/>
                         <Text text={userDetails.address.suite}/>
                    </div>
                    <div className='pt-2'>
                    <SubTitle title="City:"/>
                         <Text text={userDetails.address.city}/>
                    </div>
                    <div className='pt-2'>
                    <SubTitle title="Zip:"/>
                         <Text text={userDetails.address.zipcode}/>
                    </div>
                   
                    
                </div>
            </div>
            </div>
        </div>
    );
};

export default UserDetails;