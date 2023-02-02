import React from 'react';

const ToggleBtn = ({ open, toggle }) => {
    return (
        <button
        onClick={toggle}
        className='bg-gradient-to-l from-teal-600 bg-cyan-500 px-6 py-1 rounded-md text-white font-medium'>
            {open ? "Hide" : "Show"}
        </button>
    );
};

export default ToggleBtn;