import React from 'react'
import { Facebook, Instagram, Mail, Twitter, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'

const AboutBanner = () => {
  return (
    <section className="py-24">
    <div className="container">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="basis-[50%]">
          <p className='mb-0 font-bold'>Things you need to know</p>
          <h2 className='text-accent'>About Me</h2>
          <p className="max-w-[550px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aliquid sint consequatur vitae quidem nulla iste libero. Dolor vel, iure modi dolorum alias distinctio fuga autem, vitae nostrum consequatur tenetur quos similique molestiae quibusdam accusantium quis aut ratione! Tempore, repellendus?</p>
          <p className="max-w-[550px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aliquid sint consequatur vitae quidem nulla iste libero. Dolor vel, iure modi dolorum alias distinctio fuga autem, vitae nostrum consequatur tenetur quos similique molestiae quibusdam accusantium quis aut ratione! Tempore, repellendus?</p>

          <ul className='flex gap-5'>
            <li><Link to="/"><Facebook stroke={"#ffa700"}/></Link></li>
            <li><Link to="/"><Twitter stroke={"#ffa700"}/></Link></li>
            <li><Link to="/"><Instagram stroke={"#ffa700"}/></Link></li>
            <li><Link to="/"><Youtube stroke={"#ffa700"}/></Link></li>
            <li><Link to="/"><Mail stroke={"#ffa700"}/></Link></li>
          </ul>
        </div>
        <div className="basis-[50%] self-center grid place-content-center">
        <img src="https://via.placeholder.com/550x550" alt="" className="size-[450px] rounded-full"/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutBanner