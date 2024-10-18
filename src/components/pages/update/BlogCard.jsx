import { Calendar, Tag, User } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({image, author, date, tag, title, info, path}) => {
  return (
    <div className="blog-card mb-20">
              <img src={image} alt="" className='w-full h-[450px] object-cover'/>
              <ul className='flex flex-wrap justify-between items-center my-3'>
                <li className='flex justify-center gap-2'><User/> {author}</li>
                <li className='flex justify-center gap-2'><Calendar/> {date}</li>
                <li className='flex justify-center gap-2'><Tag/> {tag}</li>
              </ul>
              <h3 className='text-accent'>{title}</h3>
              <p>{info}</p>
              <Link to={path} className='text-accent'>Read More</Link>

    </div>
  )
}

export default BlogCard