import React from 'react';

const Text = (text) => {
    console.log('sss',text);
    return (
        <p className='font-normal text-white'>
            {text.text}
        </p>
    );
};

export default Text;