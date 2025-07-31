"use client";
import Link from "next/link";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import React from "react";
import Logo from "@/public/images/UdvashUnmeshOnlineCare.png";
import { useSidebarStore } from "../store/sidebarStore";

export default function Navbar() {
  const { toggleSidebar } = useSidebarStore();
  const handleToggleSidebar = () => {
    toggleSidebar();
  };

  return (
    <div>
      <nav className="bg-white px-4 py-2 flex items-center justify-between sticky top-0 z-50 transition-shadow duration-200 shadow-md">
        <div className="flex items-center gap-6">
          <Link href="/">
            <Image src={Logo} alt="Logo" className="h-12 w-auto" />
          </Link>
          <CiMenuBurger
            size={32}
            className="cursor-pointer"
            onClick={handleToggleSidebar}
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://ums-portal-3.osl.team/Content/Image/AppIcon/Notification.svg"
            alt="Notification Icon"
            width={32}
            height={32}
            className="cursor-pointer"
          />
          <Image
            src="https://ums-portal-3.osl.team/Content/Image/AppIcon/Profile.svg"
            alt="Profile Icon"
            width={32}
            height={32}
            className="cursor-pointer"
          />
        </div>
      </nav>
    </div>
  );
}
