import Introduction from '../components/Introduction';
import SEO from '../components/Seo';

const Custom404 = props => {
  return (
    <main className='fade'>
      <SEO title='404' siteTitle='Ryan Canfield' description="Sorry, but the page you are looking for does not exist." />
      <Introduction title='Page Not Found.' subtitle="Sorry, but the page you are looking for does not exist." />
    </main>
  )
}

export default Custom404;
