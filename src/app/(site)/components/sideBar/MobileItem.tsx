"use client";

import Link from "next/link";
import clsx from "clsx";
import { NavbarItem } from "@nextui-org/react";

interface MobileItemProps {
  label: string,
  href: string;
  icon: any;
  active?: boolean;
  onClick?: () => void;
}

const MobileItem: React.FC<MobileItemProps> = ({
  label,
  href,
  icon: Icon,
  active,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick()
    }
  }

  return (
    <NavbarItem
      className="
        w-full
        h-full
        text-gray-500
      "
    >
      <Link
        onClick={onClick}
        href={href}
        className={clsx(`
          w-full
          h-full
          text-small
          flex 
          flex-col 
          justify-center 
          items-center 
        `,
          active && "bg-gray-100 text-black"
        )}
      >
        <Icon className="h-6 w-6" />
        <span >{label}</span>
      </Link>
    </NavbarItem>


  )
}

export default MobileItem;