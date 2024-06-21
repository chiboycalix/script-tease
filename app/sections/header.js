"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
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
} from "@/components/material/MTailwind";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  TagIcon,
  UserGroupIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import Button from "@/components/Button";
import "@/components/styles/header.css";
import { useWindowSize } from "@uidotdev/usehooks";

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
  {
    title: "Blog",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
    path: "blogs",
  },
];
const community = [
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
    title: "Programs",
    description: "Explore limited-time deals and bundles",
    icon: TagIcon,
    path: "programs",
  },
  {
    title: "About Us",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
    path: "our-story",
  },
];

const PhoneNumber = () => {
  return (
    <p className="text-black flex items-center gap-2 basis-[50%]">
      <PhoneIcon
        strokeWidth={2.5}
        className={`h-5 w-5 transition-transform text-primary-500`}
      />
      <span className="inline-block">+1 (514) 166-719</span>
    </p>
  );
};

const NavListMenu = ({ navListMenuItems, menuTitle }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(({ icon, title, path }, key) => (
    <div
      onClick={() => {
        router.push(`/${path}`, { scroll: false });
      }}
      key={key}
      className="dropdown-link"
    >
      <MenuItem className="flex items-center gap-3 text-black font-medium hover:bg-white hover:bg-opacity-10 hover:text-primary-500">
        <div className="flex items-center justify-center p-2">
          {" "}
          {React.createElement(icon, {
            strokeWidth: 2,
            className: "h-6 text-primary-500 font-black w-6",
          })}
        </div>
        <div className="">
          <p className="flex items-center text-[16px]">
            {title}{" "}
            {React.createElement(ArrowRightIcon, {
              strokeWidth: 10,
              className: "h-4 text-primary-500 font-black w-6 right-arrow",
            })}
          </p>
        </div>
      </MenuItem>
    </div>
  ));

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
              className="flex items-center py-4 font-medium text-black hover:bg-primary-500 hover:bg-opacity-10 hover:text-primary-500"
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
        <MenuList className="hidden rounded-xl lg:block bg-transparent border-none w-[20%] mt-[1rem] shadow-none menu-list">
          <ul className="border-none outline-none rounded-xl bg-white drop-shadow-lg">
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
    <List className="mt-4 mb-6 lg:mt-0 lg:mb-0 lg:flex-row lg:p-3 items-left justify-center">
      <NavListMenu navListMenuItems={aboutUs} menuTitle={"About Us"} />
      <NavListMenu navListMenuItems={community} menuTitle={"Community"} />
      <NavListMenu navListMenuItems={partners} menuTitle={"Partners"} />
      <Link href="/faqs">
        <ListItem className="lg:ml-2 ml-0 flex items-center justify-start py-4 text-black font-medium hover:bg-primary-500 hover:bg-opacity-10 hover:text-primary-500">
          Faqs
        </ListItem>
      </Link>
      <Link href="/contact-us">
        <ListItem className="lg:ml-2 ml-0 flex items-center justify-start py-4 text-black font-medium hover:bg-primary-500 hover:bg-opacity-10 hover:text-primary-500">
          Contact us
        </ListItem>
      </Link>
      {/* <Link href="/sample">
        <ListItem className="lg:ml-2 ml-0 flex items-center justify-start py-4 text-black font-medium hover:bg-primary-500 hover:bg-opacity-10 hover:text-primary-500">
          Sample
        </ListItem>
      </Link> */}
    </List>
  );
};

const Header = () => {
  const { width } = useWindowSize();
  const [openNav, setOpenNav] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  React.useEffect(() => {
    setOpenNav(false);
  }, [pathname]);

  return (
    <>
      <div className="max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
        <Navbar className="sticky top-0 z-[100] h-max w-full max-w-screen-3xl rounded-none bg-white px-[1rem] bg-opacity-100 py-2">
          <div className="flex items-center gap-10 justify-between text-black">
            <Link href="/" className="cursor-pointer py-1.5 basis-[10%]">
              Logo
            </Link>
            <div className="hidden lg:block basis-[55%] mx-auto">
              <NavList />
            </div>
            <div className="hidden lg:flex justify-end gap-1 items-center flex-1">
              <PhoneNumber />
              <div className="flex-1">
                <Button caption="Get Proposal" size="large" />
              </div>
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
            <NavList setOpenNav={setOpenNav} />
            <div className="flex w-full flex-col flex-nowrap items-center gap-4 lg:hidden">
              <p className="text-black flex items-center gap-2">
                <PhoneIcon
                  strokeWidth={2.5}
                  className={`h-5 w-5 transition-transform lg:ml-2 text-primary-500 `}
                />
                <span className="inline-block">+1 (555) 555-1234</span>
              </p>
              <Button caption="Get Proposal" size="large" />
            </div>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
