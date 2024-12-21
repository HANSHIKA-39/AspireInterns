import { Search } from "lucide-react";
import React from "react";

function HeroSection() {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 mt-28">
        <span className=" mx-auto px-4 py-2 rounded-full  text-[#F83002] bg-gray-100 font-medium">
          Your #1 Internship Hub for First-Year Success
        </span>
        <p className="text-4xl font-bold">
          Find the ideal first-year internship
          <br /> with <nbsp />
          <span className="text-[#6A38C2]">Aspire Interns</span>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          voluptatem vero, fuga sint eaque pariatur!
        </p>

        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
          <input
            type="text"
            placeholder="Discover your first internship"
            className="outline-none border-none w-full"
          />

          <button className="rounded-r-full bg-[#6A38C2] h-9 w-12">
            <Search className="ml-1 h-5 w-7"/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
