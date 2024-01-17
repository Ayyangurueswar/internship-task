import React from 'react'
import { Link } from 'react-router-dom'

const Mathematics = () => {
  return (
    <div className='flex justify-center items-center w-full h-full gap-8 justify-around'>
      <h1>Mathematics page</h1>
      <Link to='/flashcard/maths/relations'>Go to Relations and functions page</Link>
    </div>
  )
}

export default Mathematics
