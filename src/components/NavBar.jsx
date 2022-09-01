import React from 'react'

import { HomeIcon, MapIcon, FilmIcon, QueueListIcon, 
  ArchiveBoxIcon, ClockIcon, PlayIcon, HandThumbUpIcon, ArrowDownIcon } from '@heroicons/react/24/outline'
import NavBarSection from './NavBarSection'


const sections = [{
  links: [{
    Icon: HomeIcon,
    title: "Home"
  },
  {
    Icon: MapIcon,
    title: "Explore"
  },
  {
    Icon: FilmIcon,
    title: "Shorts"
  },
  {
    Icon: QueueListIcon,
    title: "Subscriptions"
  }]
},
{
  links: [{
    Icon: ArchiveBoxIcon,
    title: "Library"
  },
  {
    Icon: ClockIcon,
    title: "History"
  },
  {
    Icon: PlayIcon,
    title: "Your videos"
  },
  {
    Icon: ClockIcon,
    title: "Watch later"
  },
  {
    Icon: HandThumbUpIcon,
    title: "Liked videos"
  }]
}]


const NavBar = () => {
  return (
    <div className='flex flex-col'>
      {sections.map(section => <NavBarSection {...section} />)}
    </div>
  )
}

export default NavBar