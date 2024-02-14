import React from 'react'
import { HAM_IMG,  USER_ICON, YOU_IMG } from '../utiles/constants'
import { useDispatch } from 'react-redux'
import { hamToggle } from '../utiles/userSlice';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

    
    const dispatch = useDispatch();

    const handleHamClick=()=>{
        dispatch(hamToggle());
    }


  return (
    <div className='grid grid-flow-col shadow-lg'>
        <div className='flex col-span-1'>
            <img className='w-8 ml-4 cursor-pointer' alt='hamberger' src={HAM_IMG} onClick={()=>handleHamClick()}/>
            <img className='w-36' alt='logo_youtube' src={YOU_IMG}/>
        </div>
        <div className='flex col-span-10 justify-center'>
            <input className='w-1/2 h-10 border border-gray-300 mt-3 p-2 pl-5 rounded-l-full' type='text' placeholder='Search'/> 
            <button className='w-20 h-10 mt-3 rounded-r-full bg-gray-300 hover:bg-gray-400'>Search</button>
        </div>
        <div className='col-span-1'>
            <img className='w-9 mt-4 ' alt='profile' src={USER_ICON}/>
        </div>
    </div>
  )
}

export default Header