"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { NavMenu } from "./NavMenu";
import MenuIcon from "../../assets/menu-black.png";
import CloseIcon from "../../assets/close-black.png";
import Image from "next/image";
import MobileNav from "./MobileNav";

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <div className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="flex justify-between items-center px-[2rem] py-[1rem]">
        <div className="hidden lg:block">Revenue</div>
        <p className="lg:hidden block">+1 (555) 555-1234</p>
        <div className="flex justify-between items-center gap-5">
          <div className="">
            <Button className="bg-primary text-white lg:bg-white lg:text-black">
              Meet Sponsors
            </Button>
          </div>
          <div className="hidden lg:block">
            <p>+1 (555) 555-1234</p>
          </div>
        </div>
      </div>
      <hr className="block lg:hidden text-black opacity-30"/>
      <div className="flex justify-between items-center px-[2rem] py-[1rem]">
        <div>Logo</div>
        <div className="hidden lg:block">
          <NavMenu />
        </div>
        <div className="hidden lg:block">
          <Button className="bg-primary text-white">Get Proposal</Button>
        </div>
        <div className="block lg:hidden">
          <Image
            src={showMenu ? CloseIcon : MenuIcon}
            className="w-5"
            onClick={() => setShowMenu(!showMenu)}
          />
          {showMenu && <MobileNav showMenu={showMenu} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
