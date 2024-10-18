import React from 'react'
import { Link } from 'react-router-dom'

const RecentPost = ({image, title, date, path}) => {
  return (
    <Link to={path} className='flex gap-5 border border-transparent hover:text-black hover:border-accent hover:bg-accent hover:bg-opacity-5 mb-5'>
    <img src={image} alt="" />
    <div className='flex flex-col justify-between'>
      <h6>{title}</h6>
      <p className='mb-0'>{date}</p>
    </div>
  </Link>
  )
}

export default RecentPost