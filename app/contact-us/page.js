import React from "react";
import { Input, Textarea, Select, Option } from "@/components/material/MTailwind";
import Button from "@/components/Button";
import Title from "@/components/Title";

const InputWrapper = ({ children }) => {
  return <div className="xl:mb-[4rem] lg:mb-[3rem] mb-[5rem]">{children}</div>;
};
const TitleAndDescription = ({ title, description }) => {
  return (
    <div>
      <p className="text-[14px] font-bold text-[#abb9c2] text-center lg:text-left">
        {title}
      </p>
      <p className="text-white text-[24px] leading-[32px] text-center lg:text-left">
        {description}
      </p>
    </div>
  );
};
const ContactUs = () => {
  return (
    <div className="relative w-full py-[5rem] bg-primary-950 px-[2rem] mb-[20rem]">
      <div>
        <div className="flex justify-center lg:pb-[25rem] pb-[45rem]">
          <div className="lg:basis-[60%] basis-[100%]">
            <div className="text-center lg:text-left">
              <Title title="Let’s do great work together." color="white" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 xl:grid-cols-4 xl:gap-0 lg:gap-6 lg:grid-cols-2 mt-[2rem]">
              <TitleAndDescription title="TOLL FREE" description="130000" />
              <TitleAndDescription title="SALES DIRECT" description="130000" />
              <TitleAndDescription title="FAX" description="130000" />
              <TitleAndDescription title="LOCAL" description="130000" />
            </div>
          </div>
          <div className="flex-1"></div>
        </div>
        <div className="absolute xl:w-[40%] lg:w-[45%] sm:w-[93%] w-[85%] lg:right-[2rem] lg:top-[5rem] sm:top-[20rem] top-[25rem] shadow-[0px_7px_8px_0px_#EAF3FC] rounded-xl">
          <div className="w-full bg-white px-[2rem] py-[5rem] rounded-md">
            <InputWrapper>
              <Input
                variant="static"
                label={
                  <p className="font-bold text-[16px] text-[#2c3345]">
                    Full Name
                  </p>
                }
                required
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                variant="static"
                label={
                  <p className="font-bold text-[16px] text-[#2c3345]">
                    Organisation
                  </p>
                }
                required
              />
            </InputWrapper>

            <InputWrapper>
              <Select variant="static" label={(<p className="font-bold text-[16px] text-[#2c3345]">Select Organisation</p>)}>
                <Option className="font-bold text-[16px] text-[#2c3345]">Company</Option>
                <Option className="font-bold text-[16px] text-[#2c3345]">University</Option>
                <Option className="font-bold text-[16px] text-[#2c3345]">Government Organisation</Option>
              </Select>
            </InputWrapper>
            <InputWrapper>
              <Input
                variant="static"
                label={
                  <p className="font-bold text-[16px] text-[#2c3345]">
                    Phone Number
                  </p>
                }
                required
              />
            </InputWrapper>

            <InputWrapper>
              <Input
                variant="static"
                label={
                  <p className="font-bold text-[16px] text-[#2c3345]">Email</p>
                }
                required
              />
            </InputWrapper>
            
            
            <InputWrapper>
              <Textarea
                variant="static"
                label={
                  <p className="font-bold text-[16px] text-[#2c3345]">
                    What can we help you with?
                  </p>
                }
                required
              />
            </InputWrapper>
            <Button caption="Get in touch" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
