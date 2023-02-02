import React from 'react';

const Text = (text) => {
    console.log('sss',text);
    return (
        <p className='font-normal text-[15px] text-gray-200'>
            {text.text}
        </p>
    );
};

export default Text;