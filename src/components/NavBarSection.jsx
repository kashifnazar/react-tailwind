import React from 'react'
import NavBarLink from './NavBarLink'

/**
 * 
 * @param {{title: string, links: {Icon, title: string}[]}} 
 * @returns 
 */
const NavBarSection = ({title, links}) => {
  
  return (
    <div className='flex flex-col'>

      {title && <h3>{title}</h3>}

      <div className='flex flex-col border-b-gray-200 border-b-2'>
        {links.map(({title, Icon}) => (<NavBarLink Icon={Icon} title={title}/>))}
      </div>
    </div>
  )
}

export default NavBarSection