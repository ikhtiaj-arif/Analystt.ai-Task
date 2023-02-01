import React from 'react';

const ToggleBtn = ({ open, toggle }) => {
    return (
        <button
        onClick={toggle}
        className='btn btn-success'>
            {open ? "Hide" : "Show"}
        </button>
    );
};

export default ToggleBtn;