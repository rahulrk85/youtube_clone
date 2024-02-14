import React, { useEffect } from 'react'
import { YOUTUBE_API } from '../utiles/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addVideos } from '../utiles/videoSlice';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

    const dispatch = useDispatch();
    const storeVideos = useSelector((store)=>store.videos.videos);


    const videos = async() =>{
        const data = await fetch(YOUTUBE_API);
        const json = await data.json();
        console.log(json.items);
        dispatch(addVideos(json.items));
    }

    useEffect(()=>{
        videos();
    },[]);


    if(!storeVideos) return null;
  return (
    <div className='flex flex-wrap ml-16'>
      {storeVideos.map(video=><Link to={"/watch?v="+ video.id}><VideoCard key={video.id} info={video}/></Link>)}
        
    </div>
  )
}

export default VideoContainer