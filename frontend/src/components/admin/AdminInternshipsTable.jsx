import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, Eye, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AdminInternshipsTable = () => { 
    const {allAdminInternships, searchInternshipByText} = useSelector(store=>store.internship);

    const [filterInternships, setFilterInternships] = useState(allAdminInternships);
    const navigate = useNavigate();

    useEffect(()=>{ 
        console.log('called');
        const filteredInternships = allAdminInternships.filter((internship)=>{
            if(!searchInternshipByText){
                return true;
            };
            return internship?.title?.toLowerCase().includes(searchInternshipByText.toLowerCase()) || internship?.company?.name.toLowerCase().includes(searchInternshipByText.toLowerCase());

        });
        setFilterInternships(filtereds);
    },[allAdminInternships,searchInternshipByText])
    return (
        <div>
            <Table>
                <TableCaption>A list of your recent  posted jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        filterInternships?.map((internship) => (
                            <tr>
                                <TableCell>{internship?.company?.name}</TableCell>
                                <TableCell>{internship?.title}</TableCell>
                                <TableCell>{internship?.createdAt.split("T")[0]}</TableCell>
                                <TableCell className="text-right cursor-pointer">
                                    <Popover>
                                        <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                                        <PopoverContent className="w-32">
                                            <div onClick={()=> navigate(`/admin/companies/${internship._id}`)} className='flex items-center gap-2 w-fit cursor-pointer'>
                                                <Edit2 className='w-4' />
                                                <span>Edit</span>
                                            </div>
                                            <div onClick={()=> navigate(`/admin/internships/${internship._id}/applicants`)} className='flex items-center w-fit gap-2 cursor-pointer mt-2'>
                                                <Eye className='w-4'/>
                                                <span>Applicants</span>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                            </tr>

                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default AdminInternshipsTable