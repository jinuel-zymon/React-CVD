import React from 'react'
import { Link } from 'react-router-dom'

const HomeBanner = () => {
  return (
    <section className="py-24">
    <div className="container">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="basis-[35%]">
          <h1>Creative Visual Designs</h1>
          <p className="max-w-[550px] mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aliquid sint consequatur vitae quidem nulla iste libero. Dolor vel, iure modi dolorum alias distinctio fuga autem, vitae nostrum consequatur tenetur quos similique molestiae quibusdam accusantium quis aut ratione! Tempore, repellendus?</p>
          <Link to="/" className="btn btn-accent">Explore More</Link>
        </div>
        <div className="basis-[65%] self-center grid place-content-center">
        <img src="https://via.placeholder.com/550x550" alt="" className="size-[550px] rounded-full"/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HomeBanner