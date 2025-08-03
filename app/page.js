import Image from "next/image";
import React from "react";
import { FaGreaterThan } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="mx-2 mt-4 mb-8 px-4 py-6 rounded-xl bg-[#E6DFE6]">
      <div className="py-4 px-6 bg-white text-black mb-2.5 rounded-lg flex items-center justify-between cursor-pointer">
        <div className="flex items-center gap-4">
          <Image
            src="https://ums-portal-3.osl.team/Content/Image/AppIcon/PastClasses.svg"
            alt="Past Classes Icon"
            width={48}
            height={48}
          />
          <h1 className="text-3xl font-bold">Live Class</h1>
        </div>
        <div className="p-3 shadow-lg rounded">
          <FaGreaterThan size={24} color="#FC5A5A" />
        </div>
      </div>
      <div className="py-4 px-6 bg-white text-black mb-2.5 rounded-lg flex items-center justify-between cursor-pointer">
        <div className="flex items-center gap-4">
          <Image
            src="https://ums-portal-3.osl.team/Content/Image/AppIcon/PastExams.svg"
            alt="Past Exam Icon"
            width={48}
            height={48}
          />
          <h1 className="text-3xl font-bold">Live Exam</h1>
        </div>
        <div className="p-3 shadow-lg rounded">
          <FaGreaterThan size={24} color="#23C081" />
        </div>
      </div>
      <div className="py-4 px-6 bg-white text-black mb-2.5 rounded-lg flex items-center justify-between cursor-pointer">
        <div className="flex items-center gap-4">
          <Image
            src="https://ums-portal-3.osl.team/Content/Image/AppIcon/PracticeExam.svg"
            alt="Practice Exam Icon"
            width={48}
            height={48}
          />
          <h1 className="text-3xl font-bold">Practice Exam</h1>
        </div>
        <div className="p-3 shadow-lg rounded">
          <FaGreaterThan size={24} color="#18BA00" />
        </div>
      </div>
      <div className="py-4 px-6 bg-white text-black mb-2.5 rounded-lg flex items-center justify-between cursor-pointer">
        <div className="flex items-center gap-4">
          <Image
            src="https://ums-portal-3.osl.team/Content/Image/AppIcon/SolveSheet.svg"
            alt="Solve Sheet Icon"
            width={48}
            height={48}
          />
          <h1 className="text-3xl font-bold">Solve Sheet</h1>
        </div>
        <div className="p-3 shadow-lg rounded">
          <FaGreaterThan size={24} color="#9F7CE8" />
        </div>
      </div>
      <div className="py-4 px-6 bg-white text-black mb-2.5 rounded-lg flex items-center justify-between cursor-pointer">
        <div className="flex items-center gap-4">
          <Image
            src="https://ums-portal-3.osl.team/Content/Image/AppIcon/QnAService.svg"
            alt="QnA Service Icon"
            width={48}
            height={48}
          />
          <h1 className="text-3xl font-bold">QnA Service</h1>
        </div>
        <div className="p-3 shadow-lg rounded">
          <FaGreaterThan size={24} color="#25B7D3" />
        </div>
      </div>
      <div className="py-4 px-6 bg-white text-black mb-2.5 rounded-lg flex items-center justify-between cursor-pointer">
        <div className="flex items-center gap-4">
          <Image
            src="https://ums-portal-3.osl.team/Content/Image/AppIcon/CourseContent.svg"
            alt="Course Content Icon"
            width={48}
            height={48}
          />
          <h1 className="text-3xl font-bold">Course Content</h1>
        </div>
        <div className="p-3 shadow-lg rounded">
          <FaGreaterThan size={24} color="#FF9000" />
        </div>
      </div>
      <div className="py-4 px-6 bg-white text-black mb-2.5 rounded-lg flex items-center justify-between cursor-pointer">
        <div className="flex items-center gap-4">
          <Image
            src="https://ums-portal-3.osl.team/Content/Image/AppIcon/DiscussionGroup.svg"
            alt="Discussion Group Icon"
            width={48}
            height={48}
          />
          <h1 className="text-3xl font-bold">Discussion Group</h1>
        </div>
        <div className="p-3 shadow-lg rounded">
          <FaGreaterThan size={24} color="#18BA00" />
        </div>
      </div>
    </div>
  );
}
