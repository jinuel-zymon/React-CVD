import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className='py-6 bg-black'>
        <div className="container">
          <div className='flex justify-between items-center'>
          <Link to="/" className="text-white text-3xl font-bold group hover:text-white">Creative <span className='text-accent'>Visual</span> Designs </Link>
          <nav>
            <ul className='flex gap-10'>
              <li><Link className='text-white text-lg' to="/">Home</Link></li>
              <li><Link className='text-white text-lg' to="/about">About</Link></li>
              <li><Link className='text-white text-lg' to="/services">Services</Link></li>
              <li><Link className='text-white text-lg' to="/updates">Updates</Link></li>
              <li><Link className='text-white text-lg' to="/contact">Contact</Link></li>
            </ul>
          </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header