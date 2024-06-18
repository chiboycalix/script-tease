import React from "react";

const Button = ({ caption, onClick = null, variant="primary", size="large" }) => {
  const buttonSize = size === 'small' ? 'text-[14px]' : 'text-[18px]'
  const buttonVariant = variant === 'primary' ? 'bg-primary text-white' : 'bg-white text-black border'
  return (
    <button
      onClick={onClick}
      className={`${buttonVariant} ${buttonSize} hover:bg-opacity-90 w-full py-[1rem] px-[2rem] rounded-md cursor-pointer}`}
    >
      {caption}
    </button>
  );
};

export default Button;
