import React from 'react'
import { Link } from 'react-router-dom'

const HomeAbout = () => {
  return (
    <section className="py-24">
    <div className="container">
      <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-10">
        <div className="basis-[50%]">
          <h3 className='text-accent'>About Me</h3>
          <p className="max-w-[550px] mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aliquid sint consequatur vitae quidem nulla iste libero. Dolor vel, iure modi dolorum alias distinctio fuga autem, vitae nostrum consequatur tenetur quos similique molestiae quibusdam accusantium quis aut ratione! Tempore, repellendus?</p>
        </div>
        <div className="basis-[50%] self-center grid place-content-center">
        <img src="https://via.placeholder.com/550x550" alt="" className="size-[450px] rounded-full"/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HomeAbout