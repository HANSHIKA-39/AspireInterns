import React from "react";
import LatestInternshipCard from "./LatestInternshipCard";
import { useSelector } from "react-redux";


function LatestInternships() {
  const { allInternships } = useSelector((store) => store.internship);

  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-3xl font-bold mb-6">
        {" "}
        <span className="text-[#6A38C2]"> Latest & Top </span>Internship
        Openings
      </h1>
      <div className="grid grid-cols-3">
        {allInternships.length <= 0 ? (
          <span>No Internships Available</span>
        ) : (
          allInternships
            .slice(0, 6)
            .map((internship) => (
              <LatestInternshipCard
                key={internship._id}
                internship={internship}
              />
            ))
        )}
      </div>
    </div>
  );
}
export default LatestInternships;
