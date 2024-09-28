import React from "react"

function CustomButton({ text }) {

    const handleClick = (e) => {
        e.preventDefault();
        e. stopPropagation()
        alert('Now, why did you do that?');
    }
    return (
        <button onClick={handleClick}>{text}</button>
    )
}

export default CustomButton

