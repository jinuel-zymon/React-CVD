import React from 'react'

const ServicesTwoCols = ({price, title, image, content, isDark}) => {
  return (
    <section className={`py-24 ${isDark ? "bg-black text-white" : ""}`}>

      <div className="container">
        <div className={`flex flex-col-reverse md:flex-row ${isDark ? "md:flex-row-reverse" : ""} items-center gap-10`}>
          <div className='content basis-[55%]'>
            <h1 className='text-accent'>{title}</h1>
            <p>{content}</p>


            <div>
              <h5 className='mb-0'>Price Start At</h5>
              <h4 className='mb-0 text-accent'>{price}</h4>
              <small>Price may vary depending on the design and development</small>
            </div>
          </div>
          <div className='img basis-[45%] grid place-content-center'>
            <img src={`${image}`} alt="" className='size-[400px] rounded-full object-cover'/>
          </div>
        </div>
      </div>

    </section>
  )
}

export default ServicesTwoCols