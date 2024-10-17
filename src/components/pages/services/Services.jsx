import CallToAction from '@/components/parts/CallToAction'
import Footer from '@/components/parts/Footer'
import Header from '@/components/parts/Header'
import React from 'react'
import ServicesTwoCols from './ServicesTwoCols'

const Services = () => {
  return (
    <>
    <Header/>
    <ServicesTwoCols 
    title="Web Design & Development" 
    price="$200-$300" 
    image="https://via.placeholder.com/400x400"
    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit quibusdam dolor veniam eligendi quod recusandae laborum beatae expedita repellendus mollitia!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id molestias vero laudantium eius quod exercitationem praesentium molestiae vel, tempora perferendis beatae architecto quisquam in! Saepe officiis consectetur obcaecati libero officia."
    isDark={false}
    />
    <ServicesTwoCols 
    title="Graphics and Vector Design" 
    price="$150-$350" 
    image="https://via.placeholder.com/400x400"
    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit quibusdam dolor veniam eligendi quod recusandae laborum beatae expedita repellendus mollitia!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id molestias vero laudantium eius quod exercitationem praesentium molestiae vel, tempora perferendis beatae architecto quisquam in! Saepe officiis consectetur obcaecati libero officia."
    isDark={true}
    />
    <ServicesTwoCols 
    title="Social Media Specialist" 
    price="$240-$300" 
    image="https://via.placeholder.com/400x400"
    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit quibusdam dolor veniam eligendi quod recusandae laborum beatae expedita repellendus mollitia!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id molestias vero laudantium eius quod exercitationem praesentium molestiae vel, tempora perferendis beatae architecto quisquam in! Saepe officiis consectetur obcaecati libero officia."
    isDark={false}
    />



    <CallToAction/>
    <Footer/>
    </>
  )
}

export default Services