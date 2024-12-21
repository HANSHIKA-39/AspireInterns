import { Bookmark } from "lucide-react";
import React from "react";
import { AvatarImage, Avatar } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

function Internship({internship}) {
  const navigate=useNavigate();

  const daysagofunction=(mongodbTime)=>{
    const today=new Date(mongodbTime);
    const internshipDate=new Date();
    const diffTime=today.getTime()-internshipDate.getTime();
    const diffDays=Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-200">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500"> {daysagofunction(internship?.createdAt)==0 ? "Today" : `${daysagofunction(internship?.createdAt) } days ago`} </p>
        <button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <button>
          <Avatar>
            <AvatarImage src="https://th.bing.com/th/id/OIP.kFHaNj2qDN3AYtoDKhzNpAHaHa?rs=1&pid=ImgDetMain" />
          </Avatar>
        </button>
        <div>
          <h1 className="font-medium text-lg ">{internship?.company?.name}</h1>
          <p className="text-gray-500 text-sm">India</p>
        </div>
      </div>

      <div>
        <h1 className='font-bold text-lg my-2'>{internship?.title} </h1>
        <p className="text-sm text-gray-600">
          {internship?.description}
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
      <Badge className={'text-blue-700 font-bold'} variant="ghost">{internship?.posiyion} Positions</Badge>
        <Badge  className={'text-[#F83002] font-bold'} variant="ghost">{internship?.internshipType}</Badge>
        <Badge  className={'text-[#7209b7] font-bold'} variant="ghost">{internship?.salary} </Badge>
    </div>

    <div className="flex items-center gap-4 mt-4">
        <Button onClick={()=>navigate(`/description/${internship?._id}`)} variant="outline">Details</Button>
        <Button className="bg-[#6A38C2]" >Save For Later</Button>
    </div>
    </div>
  );
}

export default Internship;
