import React from 'react'
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';


const Breadcrumbs = () => {
  const routes = [
    {path: '/', breadcrumb: 'Home'},
    {path: '/flashcard', breadcumb: 'Flashcard'},
    {path: '/flashcard/maths', breadcrumb: 'Mathematics'},
    {path: '/flashcard/maths/relations', breadcrumb: 'Relations and functions'}
  ];
  const breadcrumbs = useBreadcrumbs(routes);
  const location = useLocation();
  return (
    <div className='flex gap-2 my-9 text-sm'>
      {breadcrumbs.map(({ match, breadcrumb }, i) => (
        (i != 0 ? (<Link key={match.url} to={breadcrumb.key} className={clsx('text-gray-700', 
        {'text-indigo-800 font-semibold': match.pathname === location.pathname,})}>
          &gt; {breadcrumb}
        </Link>) : (
          <Link to='/' key={match.url}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          </Link>
        ))
      ))}
    </div>
  )
}

export default Breadcrumbs
