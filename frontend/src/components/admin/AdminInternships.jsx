import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button' 
import { useNavigate } from 'react-router-dom' 
import { useDispatch } from 'react-redux' 
import AdminInternshipsTable from './AdminInternshipsTable'
import useGetAllAdminInternships from '@/hooks/useGetAllAdminInternships'
import { setSearchInternshipByText } from '@/redux/internshipSlice'

const AdminInternships = () => {
  useGetAllAdminInternships();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchInternshipByText(input));
  }, [input]);
  return (
    <div>
      <Navbar />
      <div className='max-w-6xl mx-auto my-10'>
        <div className='flex items-center justify-between my-5'>
          <Input
            className="w-fit"
            placeholder="Filter by name, role"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={() => navigate("/admin/internships/create")}>New Jobs</Button>
        </div>
        <AdminInternshipsTable />
      </div>
    </div>
  )
}

export default AdminInternships;