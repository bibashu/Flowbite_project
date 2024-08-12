import {
  Button,
  Navbar,
  NavbarBrand,
 
} from "flowbite-react";
import {
  HiMenuAlt1,
  
} from "react-icons/hi";

import React from "react";

export default function Header({setIsOpen}) {
  return (
    <Navbar
      fluid
      rounded
      className=" ml-100 sm:ml-64 shadow-lg h-16 pt-2 sm:pt-5"
    >
      <div className="flex justify-between w-full content-center h-full">
        <Button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center  ms-0 text-lg text-black bg-white rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600"
        >
          <HiMenuAlt1 className="size-7" />
        </Button>

        <NavbarBrand href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white pr-5">
            Dashboard
          </span>
        </NavbarBrand>
      </div>
    </Navbar>
  );
}
