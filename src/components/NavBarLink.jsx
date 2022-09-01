import React from 'react'

/**
 * 
 * @param {{Icon, title: string}} param0 
 * @returns 
 */
const NavBarLink = ({Icon, title}) => {
  return (
    <div className='flex p-3 active:bg-gray-300 hover:bg-gray-200'>
          <Icon className='w-6' />
          <p className='px-5'>{title}</p>
        </div>
  )
}

export default NavBarLink