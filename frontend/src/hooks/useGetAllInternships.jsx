import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { INTERNSHIP_API_END_POINT } from "@/utils/constant";

const useGetAllInternships = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllInternships = async () => {
      try {
        const res = await axios.get(`${INTERNSHIP_API_END_POINT}/get`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setAllInternships(res.data.internships));
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchAllInternships();
  }, []);
};

export default useGetAllInternships;
