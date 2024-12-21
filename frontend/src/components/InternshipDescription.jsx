import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useParams } from "react-router-dom";
import { setSingleInternship } from "@/redux/internshipSlice";
import { useDispatch, useSelector } from "react-redux";

const InternshipDescription = () => {
  const isIntiallyApplied =
    singleInternship?.applications?.some(
      (application) => application.applicant == user?._id
    ) || false;
  const params = useParams();
  const { singleInternship } = useSelector((store) => store.internship);
  const { id } = params;
  const [isApplied, setIsApplied] = useState(isIntiallyApplied);
  const { user } = useSelector((store) => store.auth);

  const dispatch = useDispatch();

  const applyInternshipHandler = async () => {
    try {
      const res = await axios.post(`${APPLICATION_API_END_POINT}/apply/${id}`, {
        withCredentials: true,
      });
      if (res.data.success) {
        
        setIsApplied(true);
        const updateSingleInternship = {
          ...singleInternship,
          applications: [
            ...singleInternship.applications,
            { applicant: user?._id },
          ],
        };
        dispatch(setSingleInternship(updateSingleInternship));
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchSingleInternship = async () => {
      try {
        const res = await axios.get(`${INTERNSHIP_API_END_POINT}/get/${id}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setSingleInternship(res.data.internships));
          setIsApplied(
            singleInternship?.applications?.some(
              (application) => application.applicant == user?._id
            ) || false
          );
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchSingleInternship();
  }, [id, dispatch, user?._id]);

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl">{singleInternship?.title} </h1>
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
          {" "}
          {singleInternship?.position} Positions
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
          {singleInternship?.internshipType}
        </Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
          {singleInternship?.salary}
        </Badge>
        <div>
          <Button
            onClick={isApplied ? null : applyInternshipHandler}
            disabled={isApplied}
            className={`rounded-lg ${
              isApplied
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-[#7209b7] hover:bg-[#5f32ad]"
            }`}
          >
            {isApplied ? "Applied" : "Apply Now"}
          </Button>
        </div>
      </div>
      <h1 className="border-b-2 border-b-gray-300 font-medium py-4">
        Internship Description
      </h1>
      <div className="my-4">
        <h1 className="font-bold my-2">
          Role :{" "}
          <span className="pl-4 font-normal text-gray-600">
            {singleInternship?.title}
          </span>
        </h1>
        <h1 className="font-bold my-2">
          Location :{" "}
          <span className="pl-4 font-normal text-gray-600">
            {singleInternship?.location}{" "}
          </span>
        </h1>
        <h1 className="font-bold my-2">
          Duration :{" "}
          <span className="pl-4 font-normal text-gray-600">1 month</span>
        </h1>
        <h1 className="font-bold my-2">
          Salary :{" "}
          <span className="pl-4 font-normal text-gray-600">
            {singleInternship?.salary}{" "}
          </span>
        </h1>
        <h1 className="font-bold my-2">
          Skills Required :{" "}
          <span className="pl-4 font-normal text-gray-600">
            {singleInternship?.experience}
          </span>
        </h1>
        <h1 className="font-bold my-2">
          Description :{" "}
          <span className="pl-4 font-normal text-gray-600">
            {singleInternship?.description}
          </span>
        </h1>
        <h1 className="font-bold my-2">
          Posted Date :{" "}
          <span className="pl-4 font-normal text-gray-600">
            {singleInternship?.createdAt.split("T")[0]}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default InternshipDescription;
