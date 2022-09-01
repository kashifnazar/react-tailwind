import React from 'react'

import {Bars3Icon, VideoCameraIcon, BellIcon, MagnifyingGlassIcon} from '@heroicons/react/24/outline'

const Header = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center'>
        <Bars3Icon className='w-10' />
        YouTube Logo
      </div>
      <div className='flex border-gray-300 border-2 rounded-3xl px-4 py-2 items-center'>
        <input type="text" placeholder='Search' className='border-transparent active:outline-none focus:outline-none' />
        <div>
            <MagnifyingGlassIcon className='w-5' />
        </div>
      </div>
      <div className='flex flex-row'>
        <VideoCameraIcon />
        <BellIcon />
      </div>
    </div>
  )
}

export default Header