import { setAllAdminInternships } from '@/redux/internshipSlice'
import { INTERNSHIP_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAllAdminInternships = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchAllAdminInternships = async () => {
            try {
                const res = await axios.get(`${INTERNSHIP_API_END_POINT}/getadmininternships`,{withCredentials:true});
                if(res.data.success){
                    dispatch(setAllAdminInternships(res.data.internships));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllAdminInternships();
    },[])
}

export default useGetAllAdminInternships