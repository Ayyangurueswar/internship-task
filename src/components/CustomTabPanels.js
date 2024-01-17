import React, { useState } from 'react'
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import RefreshIcon from '@mui/icons-material/Refresh';
import FullscreenIcon from '@mui/icons-material/Fullscreen';


const CustomTabPanels = ({value, index, valueArray}) => {
  const [page, setPage] = useState(0);
  return (
    <div className='container w-1/2 my-0 mx-auto' hidden={value !== index}>
      <div className='h-80 w-full custom_bg rounded-3xl my-6'>
        <div className='flex justify-between w-full p-6 text-white'>
          <LightbulbIcon fontSize='large' />
          <VolumeUpIcon fontSize='large'/>
        </div>
        <div className='container text-white h-1/2 flex justify-center items-center'>
            <p className='text-3xl font-semibold'>{valueArray[page]}</p>
        </div>
      </div>
      <div className='flex w-full justify-around'>
        <button onClick={() => {setPage(0)}}>
          <RefreshIcon fontSize='large' className='custom_color'/>
        </button>
        <div className='flex gap-5 items-center justify-between'>
          <button className='custom_bg rounded-full text-white text-2xl h-12 w-12 font-bold mx-auto my-0'
          onClick={() => {setPage((page) => page-1)}} disabled={page === 0}>
            <span>&lt;</span>
          </button>
          <div className='font-bold'>
            {`${page+1 < 10 ? '0' + Number(page+1) : Number(page+1)}/${valueArray.length}`}
          </div>
          <button className='custom_bg rounded-full text-white text-2xl h-12 w-12 font-bold mx-auto my-0'
          onClick={() => {setPage((page) => page+1)}} disabled={page === valueArray.length-1}>
            <span>&gt;</span>
          </button>
        </div>
        <FullscreenIcon fontSize='large' className='custom_color'/>
      </div>
    </div>
  )
}

export default CustomTabPanels
