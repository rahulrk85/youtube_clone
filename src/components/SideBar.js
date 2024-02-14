import React from 'react'
import { useSelector } from 'react-redux';
import { HOME_ICON, SHORTS_ICON, SUBSCRIPTION_ICON } from '../utiles/constants';
import { Link } from 'react-router-dom';

const SideBar = () => {

  const hamStatus = useSelector((store)=>store.user.hamStatus);

  if(!hamStatus) return null;

  return (
    <div className='w-56'>
      <div className='flex justify-center border-b-4 pb-4 mt-3'>
        <ul className=''>
          <Link to="/"><li className='flex p-2 ml-3 hover:bg-gray-300 rounded-lg cursor-pointer my-2'><img className='w-8' alt='home' src={HOME_ICON}/><span className='px-4 py-2'>Home</span></li></Link>
          <li className='flex p-2 ml-3 hover:bg-gray-300 rounded-lg cursor-pointer my-2'><img className='w-8'  alt='shorts' src={SHORTS_ICON}/><span className='px-4 py-2'>Shorts</span></li>
          <li className='flex p-2 ml-3 hover:bg-gray-300 rounded-lg cursor-pointer my-2'><img className='w-8' alt='Subscriptions' src={SUBSCRIPTION_ICON}/><span className='px-4 py-2'>Subscriptions</span></li>
        </ul>
      </div>
      <div className='flex justify-center border-b-4 pb-4 mt-3'>
      <ul>
          <li className='px-6 py-3 hover:bg-gray-300 rounded-lg cursor-pointer'>You</li>
          <li className='px-6 py-3 hover:bg-gray-300 rounded-lg cursor-pointer'>Your Channel</li>
          <li className='px-6 py-3 hover:bg-gray-300 rounded-lg cursor-pointer'>History</li>
          <li className='px-6 py-3 hover:bg-gray-300 rounded-lg cursor-pointer'>Your Videos</li>
          <li className='px-6 py-3 hover:bg-gray-300 rounded-lg cursor-pointer'>Watch later</li>
          <li className='px-6 py-3 hover:bg-gray-300 rounded-lg cursor-pointer'>Show more</li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar