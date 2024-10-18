import React from 'react'
import { Link } from 'react-router-dom'

const TagLink = ({title, path}) => {
  return (
    <Link to={path} className='uppercase border border-black py-3 px-5 hover:bg-black hover:text-white transition-all rounded-3xl inline-block mr-2 mb-2'>{title}</Link>
  )
}

export default TagLink