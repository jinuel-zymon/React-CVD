import CallToAction from '@/components/parts/CallToAction'
import Footer from '@/components/parts/Footer'
import Header from '@/components/parts/Header'
import BlogCard from './BlogCard'
import CategoryItem from './CategoryItem'
import RecentPost from './RecentPost'
import TagLink from './TagLink'

const Update = () => {
  return (
    <>
    <Header/>
    <section className='py-24'>
      <div className="container">
        <h1 className='mb-0 text-accent'>Latest Trends</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sequi!</p>

        <div className="grid md:grid-cols-[2.5fr,_1fr] gap-10 mt-10">
          <main>
            <BlogCard
            image="https://via.placeholder.com/200x200"
            author="Roy Balaaldia"
            date="March 7, 2024"
            tag="Web Design | Wire Frame"
            title="Designing Concept"
            info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nisi illum doloremque amet quam? Tempora earum eos atque, harum mollitia commodi dolores vel alias. Quam impedit id aliquid maiores nemo."
            path="/design-concept"
            />
            <BlogCard
            image="https://via.placeholder.com/200x200"
            author="Roy Balaaldia"
            date="March 7, 2024"
            tag="Web Development"
            title="Design to Code"
            info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nisi illum doloremque amet quam? Tempora earum eos atque, harum mollitia commodi dolores vel alias. Quam impedit id aliquid maiores nemo."
            path="/design-to-code"
            />
          </main>
          <aside>
            <div className="aside-box mb-10">
              <h4 className='text-accent uppercase'>Categories</h4>
              <CategoryItem title="Web Design" count="2"/>
              <CategoryItem title="Web Development" count="5"/>
              <CategoryItem title="Wire Frame" count="3"/>
              <CategoryItem title="Vector & Logo" count="3"/>
              <CategoryItem title="Social Media" count="2"/>  
            </div>

            <div className="aside-box mb-10">
              <h4 className='text-accent uppercase'>Recent Post</h4>
              <RecentPost
              image="https://via.placeholder.com/100x100"
              title="This is Awesome"
              date="March 4, 2023"
              path="/this-is-awesome"
              />
              <RecentPost
              image="https://via.placeholder.com/100x100"
              title="This is Awesome2"
              date="April 4, 2023"
              path="/this-is-awesome2"
              />
              <RecentPost
              image="https://via.placeholder.com/100x100"
              title="This is Awesome3"
              date="August 4, 2023"
              path="/this-is-awesome3"
              />
            </div>

            <div className="aside-box mb-10">
            <h4 className='text-accent uppercase'>Tags</h4>
           <TagLink title="Web Development" path="/web-development"  />
           <TagLink title="Web Design" path="/web-design"  />
           <TagLink title="Vector & Logo" path="/vector-logo"  />
           <TagLink title="seo" path="/seo"  />
            </div>
          </aside>
        </div>
      </div>

    </section>
    <CallToAction/>
    <Footer/>
   
    </>
  )
}

export default Update