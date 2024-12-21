import React, { useState } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedInternshipTable from "./AppliedInternshipTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";

// const skills = ["HTML", "CSS", "JS", "REACTJS"];
function Profile() {
  const isResume = true;

  const [open,setOpen]=useState(false);
  const {user}=useSelector(store=>store.auth);

  return (
    <div>
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>

            <div>
              <h1 className="font-medium text-xl">User Name</h1>
              <p>{user?.profile?.bio}</p>
            </div>
          </div>
          <Button className="text-right" onClick={()=>setOpen(true)} variant="outline">
            <Pen />
          </Button>
        </div>

        <div>
          <div className="flex items-center gap-4 my-2">
            <Mail></Mail>
            <span>{user.email}</span>
          </div>

          <div className="flex items-center gap-4 my-2">
            <Contact />
            <span>{user.phoneNumber}</span>
          </div>
        </div>
        <div className="my-5">
          <h1 className="text-medium">Skills</h1>
          <div className="flex items-center gap-1 my-2">
            {
            user?.profile?.skills.length != 0 ? (
              user?.profile?.skills.map((item, index) => <Badge key={index}>{item}</Badge>)
            ) : (
              <span>N/A</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-medium font-bold">Resume</Label>
          {isResume ? (
            <a
              target="blank"
              href={user?.profile?.resume}
              className="text-blue-500 w-full hover:underline cursor-pointer"
            >
              {user?.profile?.resumeOriginalName}
            </a>
          ) : (
            <span>NA</span>
          )}
        </div> 

        
      </div>
      <div className="max-w-4xl bg-white rounded-2xl mx-auto ">
            <h1 className="font-bold text-lg my-4">Applied Internships</h1>

            <AppliedInternshipTable/>
        </div>
        <UpdateProfileDialog open={open} setOpen={setOpen}/>
    </div>
  );
}

export default Profile;
