import React from 'react';

const Title = (title) => {
    return (
        <h2 className='font-bold text-cyan-100 text-[18px] '>
            {title.title}
        </h2>
    );
};

export default Title;