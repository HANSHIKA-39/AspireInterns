import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Banglore", "Hyderabad", "Pune", "Mumbai", "Online"],
  },

  {
    filterType: "Industry",
    array: [
      "Frontend Developer",
      "Backend Developer",
      "UI/UX Designer",
      "Full Stack Web Development",
    ],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "40k-1lakh", "1 lakh to 5 lakh"],
  },
];

function FilterCard() {
  return (
    <div className="bg-white w-full rounded-mdcc p-3">
      <h1 className="font-bold text-lg ">Filter Internships</h1>
      <hr className="mt-3"/>
      <RadioGroup>
        {
            filterData.map((item, index) => (
              <div >
                <h1 className="font-bold  text-lg ">{item.filterType}</h1>
                  {
                  item.array.map((data, index) => {
                    return (
                    <div className="flex items-center space-x-2 my-2 text-sm">
                        <RadioGroupItem value={data}/>
                            <label>{data}</label>
                        
                    </div>
                    )
                  })

}
              </div>
            ))

  
        }
      </RadioGroup>
    </div>
  );
}

export default FilterCard;
