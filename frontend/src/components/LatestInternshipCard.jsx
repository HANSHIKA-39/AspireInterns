import React from "react";
import { Badge } from "./ui/badge";

function LatestInternshipCard({internship}) {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer m-5">
      <div>
        <h1 className="font-medium text-lg">{internship?.company?.name}</h1>
        <p className="text-sm text-gray-500">India</p>
      </div>
      <div >
        <h1 className="font-bold text-lg my-2">{internship?.title}</h1>{" "}
        <p className="text-sm text-gray-600">
          {internship?.description}
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={'text-blue-700 font-bold'} variant="ghost">{internship?.position} Positions</Badge>
        <Badge  className={'text-[#F83002] font-bold'} variant="ghost">{internship?.internshipType} </Badge>
        <Badge  className={'text-[#7209b7] font-bold'} variant="ghost">{internship?.salary} </Badge>
      </div>
    </div>
  );
}

export default LatestInternshipCard;
