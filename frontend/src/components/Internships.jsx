import React from 'react'
import FilterCard from './FilterCard'
import Internship from './Internship'
import { useSelector } from 'react-redux'


function Internships() {
  const {allInternships}=useSelector(store=>store.internship)
  return (
    <div>
      {/* Filter page */}
      <div className='max-w-7xl mx-auto mt-5'>
        <div className='flex gap-5'>
       <div className='w-20%'>
         <FilterCard/>
       </div>
      
      {/* Internship Card */}

      {
        allInternships.length<=0 ? <span>Internships not found</span> : (
            <div className="flex-1 h-[80vh] overflow-y-auto pb-5">
                <div className='grid grid-cols-3 gap-4'>
                    {
                        allInternships.map((internship) => (
                            <div key={job?._id}>
                                <Internship internship={internship} /></div>
                        ))
                    }
                </div>
            </div>
        )
      }
      </div>
      </div>
    </div>
  )
}

export default Internships
