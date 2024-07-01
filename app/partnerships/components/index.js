export const CenteredTextBlock = ({ 
  title, 
  description, 
  titleClassName = "text-[48px] font-extrabold", 
  descriptionClassName = "text-[21px] leading-[35px]" 
}) => {
  return (
    <div className="w-full">
      <p className={`text-center ${titleClassName}`}>
        {title}
      </p>
      <p className={`text-center ${descriptionClassName}`}>
        {description}
      </p>
    </div>
  );
};

export const Item = ({ percentage, value }) => {
  return (
    <div>
      <p className="text-[#6adfd7] text-[48px] leading-[56px] font-extrabold">
        {percentage}
      </p>
      <p className="text-[#0b1720] text-[14px] leading-[22px] font-bold">
        {value}
      </p>
    </div>
  );
};

export const Description = ({ title, description, list }) => {
  return (
    <div className="bg-primary-950 w-full lg:w-[82%] lg:ml-[9%] rounded-xl py-[3rem] px-[2rem] backdrop-brightness-0">
      <p className="text-center text-[30px] font-bold mb-[1.5rem]">{title}</p>
      <p className="text-[18px] leading-[35px] font-normal text-white text-opacity-80">
        {description}
      </p>
      <ul className="list-disc text-[18px] ml-[1rem] mt-[2rem] flex flex-col gap-5 text-white text-opacity-80">
        {list.map((l, i) => {
          return (
            <li className="font-normal" key={i}>
              {l}
            </li>
          );
        })}
      </ul>
    </div>
  );
};