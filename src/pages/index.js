import Introduction from '../components/Introduction';
import Footer from '../components/Footer';
import AnimatedWaypoint from '../components/AnimatedWaypoint';
import SEO from '../components/Seo';
import style from '../styles/components/layout.module.scss';
import Recommendations from '../components/Recommendations';

const About = props => {
  return (
    <main className='fade'>
      <SEO title='About' siteTitle='Ryan Canfield' description="Ryan Canfield is a digital product designer&nbsp;&amp; developer in Seattle,&nbsp;Wa." />
      <Introduction title="I'm Ryan Canfield," subtitle="a digital product designer&nbsp;&amp; developer in Seattle,&nbsp;Wa." />
      <div className={style['content']} id='content'>
        <div className={style['content__split']}>
          <AnimatedWaypoint>
            <div className={style['content__split__column']}>
              <div className='hr' />
              <h3 className='h3'>Expertise</h3>
              <p className='p'>While designing for digital products, I use an assortment of tools such as <a className='a' href="https://www.sketchapp.com/">Sketch</a>, Principle, Marvel &amp; inVision to design and prototype. I am always on the hunt for tools that will allow me to design more iteratively and effectively.</p>
              <p className='p'>In addition to my traditional graphic design education, I'm extremely comfortable with HTML, CSS(SCSS &amp; Stylus) &amp; Javascript. In development I specialize in dynamic user interfaces built with javascript (<a className='a' href='http://www.reactjs.org'>Reactjs</a> in particular). I strive for maintainable, extensible code that is accessible and user-centric.</p>
              <p className='p'>I am accustomed to an agile development flow including daily stand-up, sprint based development, and iterative &amp; incremental development cycles. I am comfortable with complex git workflows as well as kanban style issue tracking services.</p>
              <p className='p'>I work well on a team and can brainstorm and problem solve sticking points on the fly; especially in areas where design and development meet. Because I can speak both languages, I am an excellent liason between design and development teams.</p>
            </div>
          </AnimatedWaypoint>
          <AnimatedWaypoint>
            <div className={style['content__split__column']}>
              <div className='hr' />
              <h3 className='h3'>Professional Achievements &amp; Initiatives</h3>
              <p className='p'>Spoke on personal design &amp; development methodology at 2016 Phoenix Design Week.</p>
              <p className='p'>Established a weekly team training session in which one team member would research and present on a topic of interest in order to expand domain knowledge and team knowledge sharing capabilities.</p>
              <p className='p'>Technical lead for a 3 person team developing an application in collaboration with Shopify.</p>
              <p className='p'>Developed and maintained application frameworks, user interface component libraries, and knowledge bases in multiple previous positions.</p>
              <p className='p'>Introduced the importance and advocated for the inclusion of accessibility and building accessible digital products in multiple previous positions.</p>
              <p className='p'>Introduced company-wide coding standards to assist in developing highly readable &amp; maintainable source code.</p>
            </div>
          </AnimatedWaypoint>
          <AnimatedWaypoint>
            <div className={style['content__split__column']}>
              <div className='hr' />
              <h3 className='h3'>Work &amp; Education</h3>
              <p className='p'>In 2009, I earned an Associates in Information Technology as a member of the National Honor Society. In May 2012, I earned a Bachelor of Fine Art in Graphic Design with Honors/Cum Laude &amp; as the Salutatorian.</p>
              <p className='p'>Shortly thereafter, I began my career as a designer for the <a className='a' href='http://www.azstatefair.com'>Arizona State Fair</a> in Phoenix, AZ before focusing my career on web design and development. By October 2012, I was offered a position as a UI engineer at <a href='http://www.synapsestudios.com' className='a'>Synapse Studios</a>. A position I held until my move to Seattle, WA in 2016.</p>
              <p className='p'>Following the move to Seattle, I began a new position at <a className='a' href='http://helpfulhuman.com'>Helpful Human</a> where I specialized in user interface design &amp; front-end development. During my time with Helpful Human, I cut my teeth on large-scale, distributed application architecture while also working within a large and evolving design system.</p>
              <p className='p'>Most recently, I was a software engineer at <a className='a' href='https://xinova.com'>Xinova</a> where I architected and rebuilt the frontend of their innovation network platform- reducing 250,000 lines of legacy frontend code to only 40,000 lines of React in just 6 months.</p>
            </div>
          </AnimatedWaypoint>
        </div>
      </div>
      <Recommendations />
      <Footer />
    </main>
  );
}

export default About;
