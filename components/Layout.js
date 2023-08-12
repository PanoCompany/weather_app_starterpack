import React from "react";
import TodayInfo from "./TodayInfo";
import WeekInfo from "./WeekInfo";
import TodayHighlights from "./TodayHighlights";

export default function App() {
  return (
    <div className="w-[920px] h-[630px] bg-[#F6F6F8] rounded-3xl shadow flex">
      <TodayInfo />
      
      <div className="p-8 grid grid-rows-3 w-full gap-8">
        <WeekInfo />
        <TodayHighlights />
      </div>
    </div>
  );
}
