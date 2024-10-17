import { Facebook, Instagram, Mail, Twitter, Youtube } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='py-10 bg-black text-white'>
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <ul className='flex gap-5'>
            <li><Link to="/"><Facebook/></Link></li>
            <li><Link to="/"><Twitter/></Link></li>
            <li><Link to="/"><Instagram/></Link></li>
            <li><Link to="/"><Youtube/></Link></li>
            <li><Link to="/"><Mail/></Link></li>
          </ul>

          <p className='mb-0'>Baloc Road, Brgy. San Ignacio San Pablo City, Laguna 4000</p>
          <p className='mb-0'>Creative Visual Design</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer