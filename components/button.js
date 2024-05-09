import React from "react";
import Image from "next/image";
import './styles/button.css';

const Button = ({ caption, hasIcon, icon, onClick, hasBorder, bigBtn }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-white flex justify-center items-center gap-4 border-solid ${hasBorder ? `border-2 border-[#F58923]`: ''} ${bigBtn ? 'py-3 px-8' :'py-2 px-6'} rounded
      shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]
      hover-custom w-full`}
    >
      {caption}
      {hasIcon && (
        <Image
          src={icon}
          loading="lazy"
          className="inline-block img"
          alt={icon}
          width={20}
          height={20}
        />
      )}
    </button>
  );
};

export default Button;
