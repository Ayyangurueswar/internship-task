import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex justify-center items-center w-full h-full gap-8 justify-around'>
      <h1>Home page</h1>
      <Link to='/flashcard'>Go to Flashcard page</Link>
    </div>
  )
}

export default Home
