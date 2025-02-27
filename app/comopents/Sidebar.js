import React from 'react'
import { SiSimpleanalytics } from "react-icons/si";
import { MdOutlineRestorePage } from "react-icons/md";
import { BiBadgeCheck } from "react-icons/bi";

export default function Sidebar() {
  return (
    <div class="bg-white h-screen p-4 w-1/6">
      <div class="space-y-6 flex flex-col pt-20">
        <div className="flex flex-row bg-red-300 h-16 rounded-full justify-between pl-4 hover:bg-slate-100">
          <li class="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
            <SiSimpleanalytics />
            <span>Dashboard</span>
          </li>
        </div>
        <div className="flex flex-row bg-red-300 h-16 rounded-full justify-between pl-4 hover:bg-slate-100">
          <li class="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
            <BiBadgeCheck />
            <span>Skill Test</span>
          </li>
        </div>
        <div className="flex flex-row bg-red-300 h-16 rounded-full justify-between pl-4 hover:bg-slate-100">
          <li class="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
            <MdOutlineRestorePage />
            <span>Internship</span>
          </li>
        </div>
      </div>
    </div>
  );
}
