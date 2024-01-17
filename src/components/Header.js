import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='container-fluid flex justify-between items-center'>
      <a href='/internship-task'>
        <img src='images/Hy.png' alt='logo' className='h-20 w-56' />
      </a>
      <div className='flex justify-around items-center gap-10'>
        <Link to='/'>Home</Link>
        <Link to='/flashcard'>Flashcard</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/faq'>FAQ</Link>
        <Link to='/login' className='rounded-3xl custom_bg px-7 py-2 text-white'>Login</Link>
      </div>
    </div>
  )
}

export default Header
