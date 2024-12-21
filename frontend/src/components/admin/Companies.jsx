import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const Companies = () => {
  return (
    <div>
       <div className='flex items-center justify-between max-w-6x mx-auto my-10'>
        <div>
        <Input className="flex items-center justify-between" placeholder="Filter by name" />
        <Button>New Company</Button>
        </div>
        
       </div>
    </div>
  )
}

export default Companies
