"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const aboutLinks = [
  {
    id: 1,
    name: "Our Story",
    path: "/our-story",
  },
  {
    id: 2,
    name: "Values",
    path: "/values",
  },
  {
    id: 3,
    name: "Our Approach",
    path: "/our-approach",
  },
  {
    id: 4,
    name: "FAQ",
    path: "/faq",
  },
  {
    id: 5,
    name: "Contact us",
    path: "/contact-us",
  },
];
const communityLinks = [
  {
    id: 1,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 2,
    name: "Partnerships",
    path: "/partnerships",
  },
  {
    id: 3,
    name: "Events",
    path: "/events",
  },
  {
    id: 4,
    name: "Programs",
    path: "/programs",
  },
];
const partnersLinks = [
  {
    id: 1,
    name: "Colleges & Univerisities",
    path: "/colleges-univerisities",
  },
  {
    id: 2,
    name: "Business Organization",
    path: "/business-organization",
  },
  {
    id: 3,
    name: "Government Agencies",
    path: "/government-agencies",
  },
];

export function NavMenu() {
  return (
    <NavigationMenu className="nav">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="hover:text-primary text-[1rem]">About us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[15rem] px-4 py-4 flex flex-col gap-y-10">
              {aboutLinks.map((aboutLink) => {
                return (
                  <li key={aboutLink.id}>
                    <NavigationMenuLink asChild>
                      <a href={aboutLink.path} className="hover:text-primary cursor-pointer">
                        {aboutLink.name}
                      </a>
                    </NavigationMenuLink>
                  </li>
                );
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="hover:text-primary text-[1rem]">Community</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[15rem] px-4 py-4 flex flex-col gap-y-10">
              {communityLinks.map((communityLink) => {
                return (
                  <li key={communityLink.id}>
                    <NavigationMenuLink asChild>
                      <a
                        href={communityLink.path}
                        className="hover:text-primary cursor-pointer"
                      >
                        {communityLink.name}
                      </a>
                    </NavigationMenuLink>
                  </li>
                );
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="hover:text-primary text-[1rem]">Partners</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[15rem] px-4 py-4 flex flex-col gap-y-10">
              {partnersLinks.map((partnersLink) => {
                return (
                  <li key={partnersLink.id}>
                    <NavigationMenuLink asChild>
                      <a
                        href={partnersLink.path}
                        className="hover:text-primary cursor-pointer"
                      >
                        {partnersLink.name}
                      </a>
                    </NavigationMenuLink>
                  </li>
                );
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref className="text-[1rem]">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-xs font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
