import React, { useContext } from 'react'
import { PlayerContext } from '../context/Playercontext'
import {assets} from '../assets/assets'

const SongItem = ({name,image,desc,id}) => {
  const {PlayWithId} = useContext(PlayerContext)
  return (
<div 
  onClick={() => PlayWithId(id)} 
  className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] group'
>
  <div className='relative'>
    <img className='rounded' src={image} alt="" />
    
    {/* Play button inside the image */}
    <div 
      className='w-[50px] h-[50px] rounded-full cursor-pointer bg-[#3AE176] flex items-center justify-center 
      absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
    >
      <img className='w-6 cursor-pointer' src={assets.black_play_icon} alt="" />
    </div> 
  </div>

  <p className='font-bold mt-2 mb-1'>{name}</p>
  <p className='text-slate-200 text-sm'>{desc}</p>
</div>


  )
}

export default SongItem