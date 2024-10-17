import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <section className='bg-accent text-black py-24'>
      <div className='max-w-[750px] w-full mx-auto text-center'>
      <h3>Feel free to talk about your projects</h3>
      <p className='mb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex distinctio at neque alias ducimus perspiciatis, saepe, repudiandae dolorum placeat, impedit maiores fuga quam totam ipsa error nihil facilis non magni.</p>
      <Link to="/contact" className='btn btn-dark'>Contact Us</Link>
      </div>
    </section>
  )
}

export default CallToAction