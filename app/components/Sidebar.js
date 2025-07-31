"use client";
import React from "react";
import Image from "next/image";
import { useSidebarStore } from "../store/sidebarStore";

export default function Sidebar() {
  const { isCollapsed } = useSidebarStore();
  console.log("Sidebar isCollapsed:", isCollapsed);

  return (
    <div>
      <aside
        className={`bg-white flex-shrink-0 border-r border-gray-200 ${
          isCollapsed ? "w-20" : "w-48"
        } duration-200`}
      >
        <ul>
          <li className="px-6 py-2.5 border-b border-gray-200 flex items-center gap-2 cursor-pointer hover:bg-[#EFEAEF]">
            <Image
              src="https://ums-portal-3.osl.team/Content/Image/AppIcon/Dashboard.svg"
              alt="Dashboard Icon"
              width={30}
              height={30}
              className="cursor-pointer"
            />
            <p className={`${isCollapsed ? "hidden" : "block"}`}>Dashboard</p>
          </li>
        </ul>
      </aside>
    </div>
  );
}
