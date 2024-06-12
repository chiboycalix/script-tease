import React from "react";
import { Input, Textarea } from "@/components/material/MTailwind";

const ContactUs = () => {
  return (
    <div className="relativew-full py-[5rem] bg-[#152034] px-[2rem] mb-[20rem]">
      <div>
      <div className="flex justify-center pb-[15rem]">
        <div className="basis-[60%]">
          <p className="text-white w-[70%] text-[72px] font-black leading-[78px]">
            Let’s do great work together.
          </p>
          <div className="grid grid-cols-4 mt-[2rem]">
            <div>
              <p className="text-[14px] font-bold text-[#abb9c2]">TOLL FREE</p>
              <p className="text-white text-[24px] leading-[32px]">
                1.888.449.3239
              </p>
            </div>
            <div>
              <p className="text-[14px] font-bold text-[#abb9c2]">
                SALES DIRECT
              </p>
              <p className="text-white text-[24px] leading-[32px]">
                717.609.1553
              </p>
            </div>
            <div>
              <p className="text-[14px] font-bold text-[#abb9c2]">
                SALES DIRECT
              </p>
              <p className="text-white text-[24px] leading-[32px]">
                717.609.1553
              </p>
            </div>
            <div>
              <p className="text-[14px] font-bold text-[#abb9c2]">
                SALES DIRECT
              </p>
              <p className="text-white text-[24px] leading-[32px]">
                717.609.1553
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
      <div className="absolute w-[40%] right-[2rem] top-[15rem] shadow-[0px_7px_8px_0px_#EAF3FC] rounded-xl">
        <div className="w-full bg-white px-[2rem] py-[5rem] rounded-md">
          <div className="mb-[4rem]">
            <Input variant="static" label={(<p className="font-bold text-[16px] text-[#2c3345]">Full Name</p>)} required />
          </div>
          <div className="mb-[4rem]">
            <Input variant="static" label={(<p className="font-bold text-[16px] text-[#2c3345]">Company</p>)} required />
          </div>
          <div className="mb-[4rem]">
            <Input variant="static" label={(<p className="font-bold text-[16px] text-[#2c3345]">Email</p>)} required />
          </div>
          <div className="mb-[4rem]">
            <Input variant="static" label={(<p className="font-bold text-[16px] text-[#2c3345]">Phone Number</p>)} required />
          </div>
          <div className="mb-[4rem]">
            <Textarea
              variant="static"
              label={(<p className="font-bold text-[16px] text-[#2c3345]">What can we help you with?</p>)}
              required
            />
          </div>
          <button className="bg-primary hover:bg-opacity-90 text-white text-[21px] font-bold w-full py-[1rem] rounded cursor-pointer">Get in touch</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ContactUs;
