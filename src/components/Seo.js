import Head from 'next/head'

const SEO = ({ description, title, siteTitle }) => {
  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description} />
      {/* <meta property="og:url" content={`http://ryancanfield.me/${title.toLowerCase()}`}/> */}
      {/* <meta property="og:image" content="%PUBLIC_URL%/media/og-image.png"/> */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content='https://twitter.com/local__citizen' />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
    </Head>
  )
}

export default SEO;
