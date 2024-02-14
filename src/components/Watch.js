import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeSideBar, hamToggle } from '../utiles/userSlice';
import { useSearchParams } from 'react-router-dom';

const Watch = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(closeSideBar());
  }
  ,[]);

  const [params] = useSearchParams();
  const id= params.get("v");

  return (
    <div >
      <iframe className='ml-10' width="1000" height="500" src={"https://www.youtube.com/embed/"+id} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default Watch;