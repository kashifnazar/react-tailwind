import React from 'react'

const Body = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex p-3 border-y-2 border-gray-300'>
        <div className='rounded-3xl mx-2 hover:bg-gray-300 active:bg-black active:text-white active:border-black border-gray-300 border-2 bg-gray-200 px-5 py-2 '>All</div>
        <div className='rounded-3xl mx-2 hover:bg-gray-300 active:bg-black active:text-white active:border-black border-gray-300 border-2 bg-gray-200 px-5 py-2 '>Live</div>
        <div className='rounded-3xl mx-2 hover:bg-gray-300 active:bg-black active:text-white active:border-black border-gray-300 border-2 bg-gray-200 px-5 py-2 '>Mixes</div>
        <div className='rounded-3xl mx-2 hover:bg-gray-300 active:bg-black active:text-white active:border-black border-gray-300 border-2 bg-gray-200 px-5 py-2 '>JavaScript</div>
        <div className='rounded-3xl mx-2 hover:bg-gray-300 active:bg-black active:text-white active:border-black border-gray-300 border-2 bg-gray-200 px-5 py-2 '>Blockchain</div>
        <div className='rounded-3xl mx-2 hover:bg-gray-300 active:bg-black active:text-white active:border-black border-gray-300 border-2 bg-gray-200 px-5 py-2 '>Technology</div>
      </div>
      <div className='flex px-10 py-3 bg-gray-100 h-view'>
        <div className='flex flex-col'>
          <img src="https://i.ytimg.com/vi/j52tXsEbcQM/hqdefault.jpg" alt="Video"/>
        </div>
      </div>
    </div>
  )
}

export default Body