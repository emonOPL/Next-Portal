"use client";
import Link from "next/link";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import React from "react";
import Logo from "@/public/images/UdvashUnmeshOnlineCare.png";
import { useSidebarStore } from "../store/sidebarStore";
import ProfilePic from "@/public/images/profile-pic.png";
import { IoPencil } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { LiaPowerOffSolid } from "react-icons/lia";

export default function Navbar() {
  const { toggleSidebar } = useSidebarStore();
  const handleToggleSidebar = () => {
    toggleSidebar();
  };

  const [openCard, setOpenCard] = React.useState(false);
  const handleCardToggle = () => {
    setOpenCard(!openCard);
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
        <div className="relative">
          <div className="flex items-center gap-2">
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
              onClick={handleCardToggle}
            />
          </div>
          <div
            className={`absolute top-10 right-0 w-64 bg-white shadow-lg rounded-lg ${
              openCard ? "block" : "hidden"
            }`}
          >
            <div className="bg-[#EFEFEF] rounded-t-lg p-5 flex items-center justify-center">
              <Image
                src={ProfilePic}
                alt="Profile Picture"
                className="rounded-full"
                height={90}
                width={90}
              />
            </div>
            <p className="text-center text-sm mt-4">Emon</p>
            <p className="text-center text-sm mt-2 opacity-50">4037721</p>
            <div className="text-center my-4 flex items-center justify-evenly">
              <div className="p-1 border border-gray-300 rounded-full cursor-pointer hover:bg-black hover:text-white">
                <IoPencil size={20} />
              </div>
              <div className="p-1 border border-gray-300 rounded-full cursor-pointer hover:bg-black hover:text-white">
                <IoEye size={20} />
              </div>
              <div className="p-1 border border-gray-300 rounded-full cursor-pointer hover:bg-black hover:text-white">
                <LiaPowerOffSolid size={20} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
