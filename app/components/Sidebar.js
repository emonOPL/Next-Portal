"use client";
import React from "react";
import Image from "next/image";
import { useSidebarStore } from "../store/sidebarStore";
import PracticeExam from "@/public/images/PracticeExam.png";

export default function Sidebar() {
  const { isCollapsed } = useSidebarStore();

  return (
    <div>
      <aside
        className={`bg-white flex-shrink-0 border-r border-gray-200 ${
          isCollapsed ? "w-16" : "w-52"
        } duration-500`}
      >
        <ul>
          <li className="px-4 py-2.5 border-b border-gray-200 flex items-center gap-2 cursor-pointer hover:bg-[#EFEAEF]">
            <Image
              src="https://ums-portal-3.osl.team/Content/Image/AppIcon/Dashboard.svg"
              alt="Dashboard Icon"
              width={30}
              height={30}
              className="cursor-pointer"
            />
            <p className={`${isCollapsed ? "hidden" : "block"}`}>Dashboard</p>
          </li>
          <li className="px-4 py-2.5 border-b border-gray-200 flex items-center gap-2 cursor-pointer hover:bg-[#EFEAEF]">
            <Image
              src="https://ums-portal-3.osl.team/Content/Image/AppIcon/AddCourse.svg"
              alt="AddCourse Icon"
              width={30}
              height={30}
              className="cursor-pointer"
            />
            <p className={`${isCollapsed ? "hidden" : "block"}`}>Add Course</p>
          </li>
          <li className="px-4 py-2.5 border-b border-gray-200 flex items-center gap-2 cursor-pointer hover:bg-[#EFEAEF]">
            <Image
              src={PracticeExam}
              alt="Practice Exam Icon"
              width={30}
              height={30}
              className="cursor-pointer"
            />
            <p className={`${isCollapsed ? "hidden" : "block"}`}>
              Practice Exam
            </p>
          </li>
          <li className="px-4 py-2.5 border-b border-gray-200 flex items-center gap-2 cursor-pointer hover:bg-[#EFEAEF]">
            <Image
              src={PracticeExam}
              alt="Master Class Icon"
              width={30}
              height={30}
              className="cursor-pointer"
            />
            <p className={`${isCollapsed ? "hidden" : "block"}`}>
              Master Class
            </p>
          </li>
          <li className="px-4 py-2.5 border-b border-gray-200 flex items-center gap-2 cursor-pointer hover:bg-[#EFEAEF]">
            <Image
              src="https://ums-portal-3.osl.team/Content/Image/AppIcon/PastClasses.svg"
              alt="Past Class Icon"
              width={30}
              height={30}
              className="cursor-pointer"
            />
            <p className={`${isCollapsed ? "hidden" : "block"}`}>
              Past Classes
            </p>
          </li>
          <li className="px-4 py-2.5 border-b border-gray-200 flex items-center gap-2 cursor-pointer hover:bg-[#EFEAEF]">
            <Image
              src="https://ums-portal-3.osl.team/Content/Image/AppIcon/PastExams.svg"
              alt="Past Exam Icon"
              width={30}
              height={30}
              className="cursor-pointer"
            />
            <p className={`${isCollapsed ? "hidden" : "block"}`}>Past Exams</p>
          </li>
          <li className="px-4 py-2.5 border-b border-gray-200 flex items-center gap-2 cursor-pointer hover:bg-[#EFEAEF]">
            <Image
              src="https://ums-portal-3.osl.team/Content/Image/AppIcon/PracticeExam.svg"
              alt="Practice Exam Icon"
              width={30}
              height={30}
              className="cursor-pointer"
            />
            <p className={`${isCollapsed ? "hidden" : "block"}`}>
              Practice Exam
            </p>
          </li>
          <li className="px-4 py-2.5 border-b border-gray-200 flex items-center gap-2 cursor-pointer hover:bg-[#EFEAEF]">
            <Image
              src="https://ums-portal-3.osl.team/Content/Image/AppIcon/SolveSheet.svg"
              alt="Solve Sheet Icon"
              width={30}
              height={30}
              className="cursor-pointer"
            />
            <p className={`${isCollapsed ? "hidden" : "block"}`}>Solve Sheet</p>
          </li>
          <li className="px-4 py-2.5 border-b border-gray-200 flex items-center gap-2 cursor-pointer hover:bg-[#EFEAEF]">
            <Image
              src="https://ums-portal-3.osl.team/Content/Image/AppIcon/SolveSheet.svg"
              alt="Performance Icon"
              width={30}
              height={30}
              className="cursor-pointer"
            />
            <p className={`${isCollapsed ? "hidden" : "block"}`}>Performance</p>
          </li>
          <li className="px-4 py-2.5 border-b border-gray-200 flex items-center gap-2 cursor-pointer hover:bg-[#EFEAEF]">
            <Image
              src="https://ums-portal-3.osl.team/Content/Image/AppIcon/QnAService.svg"
              alt="QnA Service Icon"
              width={30}
              height={30}
              className="cursor-pointer"
            />
            <p className={`${isCollapsed ? "hidden" : "block"}`}>QnA Service</p>
          </li>
          <li className="px-4 py-2.5 border-b border-gray-200 flex items-center gap-2 cursor-pointer hover:bg-[#EFEAEF]">
            <Image
              src="https://ums-portal-3.osl.team/Content/Image/AppIcon/DuePayment.svg"
              alt="Due Payment Icon"
              width={30}
              height={30}
              className="cursor-pointer"
            />
            <p className={`${isCollapsed ? "hidden" : "block"}`}>Due Payment</p>
          </li>
          <li className="px-4 py-2.5 border-b border-gray-200 flex items-center gap-2 cursor-pointer hover:bg-[#EFEAEF]">
            <Image
              src="https://ums-portal-3.osl.team/Content/Image/AppIcon/DiscussionGroup.svg"
              alt="Discussion Group Icon"
              width={30}
              height={30}
              className="cursor-pointer"
            />
            <p className={`${isCollapsed ? "hidden" : "block"}`}>
              Discussion Group
            </p>
          </li>
        </ul>
      </aside>
    </div>
  );
}
