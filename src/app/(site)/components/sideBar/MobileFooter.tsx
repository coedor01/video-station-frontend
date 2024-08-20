"use client";

import { Navbar, NavbarContent } from "@nextui-org/react";
import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "./MobileItem";

const MobileFooter = () => {
  const routes = useRoutes();

  return (
    <Navbar
      position="static"
      className="
      w-full
      fixed
      bottom-0
      z-40
      "
    >

      <NavbarContent
        className="
        fixed 
        bottom-0
        left-0 
        right-0
        justify-between
        w-full
        z-40
        flex
        items-center
        bg-white
        border-t-[1px]
        lg:hidden
        gap-0
      "
      >
        {routes.map((route) => (
          <MobileItem
            label={route.label}
            key={route.href}
            href={route.href}
            active={route.active}
            icon={route.icon}
            onClick={route.onClick}
          />
        ))}
      </NavbarContent>
    </Navbar>
  )
}

export default MobileFooter;