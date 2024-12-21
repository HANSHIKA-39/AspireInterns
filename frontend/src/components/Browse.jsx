import React from 'react'
import Internship from './Internship';
const randomInternships=[1,2,3];

function Browse() {
  return (
    <div className=''>
    <div className='max-w-7xl mx-auto my-10'>
        <h1 className='font-bold text-xl my-10'>Search Results {randomInternships.length}</h1>
        <div className='grid grid-cols-3 gap-4'>
        {
            randomInternships.map((item,index)=>{
                return (
                    <Internship/>
                )
            })
        }
        </div>
        
    </div>
    </div>
  )
}

export default Browse
