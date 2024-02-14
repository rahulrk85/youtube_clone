import React from 'react'

const VideoCard = ({info}) => {


  return (
    <div className='w-60 p-2 m-2 cursor-pointer rounded-lg hover:bg-gray-300 h-72'>
        <img className='rounded-xl' alt='img' src={info.snippet.thumbnails.medium.url}/>
        <div>
            <h1 className='text-sm font-semibold my-2 mx-1'>{info.snippet.title}</h1>
            <h2 className='ml-1 text-xs pb-1'>{info.snippet.channelTitle}</h2>
            <p className='ml-1 text-xs'>{info.statistics.viewCount} views</p>
        </div>
    </div>
  )
}

export default VideoCard