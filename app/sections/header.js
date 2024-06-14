"use client";
import React from "react";
import {
  Navbar,
  Collapse,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Typography,
} from "@/components/material/MTailwind";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const aboutUs = [
  {
    title: "Our Story",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
    path: "our-story",
  },
  {
    title: "Our Values",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
    path: "our-values",
  },
  {
    title: "Contact",
    description: "Find the perfect solution for your needs.",
    icon: PhoneIcon,
    path: "contact-us",
  },
];
const community = [
  {
    title: "Blog",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
    path: "blogs",
  },
  {
    title: "Partnership",
    description: "Reach out to us for assistance or inquiries",
    icon: GlobeAmericasIcon,
    path: "partnerships",
  },
  {
    title: "Events",
    description: "Find the perfect solution for your needs.",
    icon: RectangleGroupIcon,
    path: "events",
  },
  {
    title: "Programs",
    description: "Explore limited-time deals and bundles",
    icon: TagIcon,
    path: "programs",
  },
];
const partners = [
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
    path: "our-story",
  },
  {
    title: "About Us",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
    path: "our-story",
  },
  {
    title: "Blog",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
    path: "our-story",
  },
];

const NavListMenu = ({ navListMenuItems, menuTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description, path }, key) => (
      <Link href={`/${path}`} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg hover:bg-primary hover:bg-opacity-10 hover:text-primary">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <p className="flex items-center text-sm font-bold">{title}</p>
            <p className="text-xs !font-medium text-blue-gray-500">
              {description}
            </p>
          </div>
        </MenuItem>
      </Link>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <div className="font-medium">
            <ListItem
              className="flex items-center py-4 font-medium text-gray-900 hover:bg-primary hover:bg-opacity-10 hover:text-primary"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              {menuTitle}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:ml-2 lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform ml-2 lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </div>
        </MenuHandler>
        <MenuList className="hidden rounded-xl lg:block ">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
};

const NavList = () => {
  return (
    <List className="mt-4 mb-6 lg:mt-0 lg:mb-0 lg:flex-row lg:p-3 items-center">
      <NavListMenu navListMenuItems={aboutUs} menuTitle={"About Us"} />
      <NavListMenu navListMenuItems={community} menuTitle={"Community"} />
      <NavListMenu navListMenuItems={partners} menuTitle={"Partners"} />
      <Link href="/faqs">
        <ListItem className="ml-2 flex items-center justify-center py-4 text-gray-900 hover:bg-primary hover:bg-opacity-10 hover:text-primary">
          Faqs
        </ListItem>
      </Link>
      <Link href="/contact-us">
        <ListItem className="ml-2 flex items-center justify-center py-4 text-gray-900 hover:bg-primary hover:bg-opacity-10 hover:text-primary">
          Contact us
        </ListItem>
      </Link>
    </List>
  );
};

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <>
      <div className="flex justify-between items-center px-[2rem] py-[1rem] bg-white">
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
      <div id="myHeader" className="myHeader drop-shadow-md">
        <hr className="block lg:hidden text-black opacity-100" />
        <Navbar className="w-full max-w-screen-3xl rounded-none bg-white px-6 bg-opacity-100 py-2">
          <div className="flex items-center justify-between text-black">
            <Link href="/" className="cursor-pointer py-1.5 lg:ml-2">
              Logo
            </Link>
            <div className="hidden lg:block">
              <NavList />
            </div>
            <div className="hidden gap-2 lg:flex">
              <Button className="bg-primary text-white">Get Proposal</Button>
            </div>
            <IconButton
              variant="text"
              color="blue-gray"
              className="lg:hidden"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
              ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
              )}
            </IconButton>
          </div>
          <Collapse open={openNav}>
            <NavList />
            <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
              <Button className="bg-primary text-white">Get Proposal</Button>
            </div>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
