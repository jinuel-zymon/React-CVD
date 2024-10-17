import CallToAction from "@/components/parts/CallToAction";
import CardList from "@/components/parts/CardList";
import Footer from "@/components/parts/Footer";
import Header from "@/components/parts/Header";
import HomeAbout from "./HomeAbout";
import HomeBanner from "./HomeBanner";
import HomeServices from "./HomeServices";
import { Globe, Mail, Pencil } from "lucide-react";

const Home = () => {

  const services = [
    {
      icon: <Globe  stroke={"#ffa700"} size={50} className='mx-auto mb-5'/>,
      title: 'Web Design & Development',
      body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam ut, minus dolor earum consectetur veritatis necessitatibus. Vitae cumque autem ullam'
    },
    {
      icon: <Pencil stroke={"#ffa700"} size={50} className='mx-auto mb-5'/>,
      title: 'Graphics and Vector Design',
      body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam ut, minus dolor earum consectetur veritatis necessitatibus. Vitae cumque autem ullam'
    },
    {
      icon: <Mail stroke={"#ffa700"} size={50} className='mx-auto mb-5'/>,
      title: 'Social Media Specialist',
      body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam ut, minus dolor earum consectetur veritatis necessitatibus. Vitae cumque autem ullam'
    }
  ]

  const trends = [
    {
      image: "https://via.placeholder.com/300x200",
      title: "Lorem ipsum dolor sit amet.",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim cum illum reprehenderit tenetur veniam consequuntur.",
      url: "/xxx"
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "22Lorem ipsum dolor sit amet.",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim cum illum reprehenderit tenetur veniam consequuntur.",
      url: "/xxx"
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "333Lorem ipsum dolor sit amet.",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim cum illum reprehenderit tenetur veniam consequuntur.",
      url: "/xxx"
    }
  ]

  

  

  return (
    <div>
      <Header/>
      <HomeBanner/>
      <HomeServices services={services}/>
      <HomeAbout/>
      <CardList data={trends} header="Latest Trends" subheader="Latest happenings in virtual space"/>
      <CallToAction/>
      <Footer/>
    </div>
  );
};

export default Home;
