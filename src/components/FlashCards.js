import React from 'react'
import { Link } from 'react-router-dom'

const FlashCards = () => {
  return (
    <div className='flex justify-center items-center w-full h-full gap-8 justify-around'>
      <h1>Flashcards page</h1>
      <Link to='/flashcard/maths'>Go to Mathematics page</Link>
    </div>
  )
}

export default FlashCards
