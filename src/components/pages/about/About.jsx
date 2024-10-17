import CallToAction from '@/components/parts/CallToAction'
import CardList from '@/components/parts/CardList'
import Footer from '@/components/parts/Footer'
import Header from '@/components/parts/Header'
import React from 'react'
import AboutBanner from './AboutBanner'

const About = () => {

  const project = [
    {
      image: "https://via.placeholder.com/300x200",
      title: "Lorem ipsum dolor sit amet.",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim cum illum reprehenderit tenetur veniam consequuntur.",
    
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "222Lorem ipsum dolor sit amet.",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim cum illum reprehenderit tenetur veniam consequuntur.",
    
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "333Lorem ipsum dolor sit amet.",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim cum illum reprehenderit tenetur veniam consequuntur.",
    
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "444Lorem ipsum dolor sit amet.",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim cum illum reprehenderit tenetur veniam consequuntur.",
    
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "555Lorem ipsum dolor sit amet.",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim cum illum reprehenderit tenetur veniam consequuntur.",
    
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "666Lorem ipsum dolor sit amet.",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim cum illum reprehenderit tenetur veniam consequuntur.",
    
    }
  ]
  return (
    <>
    <Header/>
    <AboutBanner/>
    <CardList data={project} header="My Recent Projects" subheader="Lorem ipsum dolor sit amet consectetur."/>
    <CallToAction/>
    <Footer/>
    </>
  )
}

export default About