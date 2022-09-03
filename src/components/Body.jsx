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
      <div className='flex flex-wrap justify-center px-4 py-3 bg-gray-100 h-view'>
        {[1,1,1,1,1,1,1,1].map(() => <div className='flex flex-col flex-wrap w-96 p-3'>
              <img src="https://i.ytimg.com/vi/j52tXsEbcQM/hqdefault.jpg" alt="Video"/>
              <div className='flex flex-row py-2'>
                <img className='rounded-full align-middle w-6 h-6 mt-1 mr-2' src="https://yt3.ggpht.com/OTUGBtiwt2UlZNx15r5CKkNUpwyOCUOJ1uhk3We3GhitgepEdJKA7gQTNGpqy81TxzRyh-RLmQ=s88-c-k-c0x00ffffff-no-rj" alt="Channel" />
                <div className='flex flex-col'>
                  <p className='font-semibold mb-1'>Coke Studio Season 2</p>
                  <a href="https://youtube.com" className='text-gray-600 text-sm'>Coke Studio</a>
                  <h4 className='text-sm text-gray-600'>165M views - 5 years ago</h4>
                </div>
              </div>
          
        </div>)}
      </div>
    </div>
  )
}

export default Body