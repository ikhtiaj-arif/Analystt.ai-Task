import React from 'react';

const Title = (title) => {
    return (
        <h2 className='font-bold text-red-800 text-[16px]'>
            {title.title}
        </h2>
    );
};

export default Title;