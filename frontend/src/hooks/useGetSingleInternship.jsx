import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { setAllInternships,setSingleInternship } from "@/redux/internshipSlice";

const useGetSingleInternship = (id) => {
  const dispatch = useDispatch();
  
};

export default useGetSingleInternship;
