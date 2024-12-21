import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

function AppliedInternshipTable() {
  return (
    <div>
      <Table>
        <TableCaption> List of your applied internships</TableCaption>
        <TableHeader>
            <TableRow> 
                  
            <TableHead>Date</TableHead> 
            <TableHead>Internship Role</TableHead> 
            <TableHead>Company</TableHead> 
            <TableHead className="text-right">Status</TableHead>  
            </TableRow>
            </TableHeader>

            <TableBody>
                {
                    [1,2,3,4].map((item,index)=>(
                        <TableRow key={index}>
                            <TableCell>2022-01-01</TableCell>
                            <TableCell>Software Engineer</TableCell>
                            <TableCell>ABC Corp</TableCell>
                            <TableCell className="text-right"><Badge>Pending</Badge></TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
      </Table>
    </div>
  )
}

export default AppliedInternshipTable
