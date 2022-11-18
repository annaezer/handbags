import React from 'react';

function Button({type, buttonText, disabled}) {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={() => console.log(buttonText)}>
            {buttonText}
        </button>
    );
}

export default Button;
