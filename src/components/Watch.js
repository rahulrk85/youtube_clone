import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { closeSideBar, hamToggle } from '../utiles/userSlice';
import { useSearchParams } from 'react-router-dom';
import { GOOGLE_API } from '../utiles/constants';

const Watch = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const [Video,setVideo] = useState(null);
  const[btn , setbtn] = useState(false);
  const id= params.get("v");

  const getVideoById= async()=>{
    const data = await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id='+ id +'&key='+ GOOGLE_API);
    const json = await data.json();
    setVideo(json.items);
    console.log(json.items);
  }
  useEffect(()=>{
    getVideoById();
    dispatch(closeSideBar());
  }
  ,[]);

  const handleClickDes = ()=>{
    setbtn(!btn);
  }



  if(!Video) return;
  return (
    <div className='grid-flow-col flex' >
      <div className='col-span-8'>
      <div className=''>
      <iframe className='ml-10 mt-5' width="1000" height="500" src={"https://www.youtube.com/embed/"+id} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      <h1 className='ml-10 py-3 text-xl font-bold'>{Video[0].snippet.title}</h1>
      </div>
      <div className='ml-10 flex font-semibold justify-between'>
        <div className='flex'>
          <h1 className='p-2 my-2'>{Video[0].snippet.channelTitle}</h1>
          <button className='p-2 px-3 m-2 bg-black text-white rounded-3xl'>Subscribe</button>
        </div>
        <div className='flex mr-64 '>
          <button className='px-2 my-2 pl-3 border bg-black text-white rounded-l-3xl'>{Math.round(Video[0].statistics.likeCount/1000)}K Likes</button>
          <button className='px-2 my-2 pr-3 bg-black text-white rounded-r-3xl'>Dislike</button>
          <button className='p-2 px-3 m-2 bg-black text-white rounded-3xl'>Share</button>
          <button className='p-2 px-3 m-2 bg-black text-white rounded-3xl'>Download</button>
          <button className='p-2 px-3 m-2 bg-black text-white rounded-3xl'>...</button>

        </div>
      </div>
      <div className='ml-10 mt-2 mr-64 rounded-lg w-auto '>
        <div className='flex'>
        <h3 className='font-bold p-2'>{Math.round(Video[0].statistics.viewCount/1000)}K Views</h3>
        <button className='text-white bg-black rounded-xl px-2 m-1' onClick={handleClickDes}>Description</button>
        </div>
        {btn && <h3 className='font-semibold p-2 mt-3'>{Video[0].snippet.description}</h3>}
      </div>
      </div>
      <div className='col-span-4 bg-white ml-7 mt-5 rounded-lg w-full'>
        
      </div>
    </div>
  )
}

export default Watch;