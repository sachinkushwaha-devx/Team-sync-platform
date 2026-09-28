import React from 'react'
import { Bell } from 'lucide-react'
import { Menu } from 'lucide-react'
import { Search } from 'lucide-react'

const TopNav = () => {
  return (
    <div className='flex justify-between items-center'>
       <div className='flex gap-4 items-center w-[30%] rounded px-3 py-2 bg-[#1B191F] border border-gray-600'>
        <Search />
        <input className='outline-0 w-full' type="text" placeholder='Search workspace...' />
         </div>
       <div className='flex gap-4'>
        <Bell size = {23} />
        <Menu size = {23}/>
       </div>
    </div>
  )
}

export default TopNav
