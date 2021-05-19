import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="keywords" content={keywords}/>
      <meta name="description" content={description} />
      <meta charSet="utf-8"/>
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'My Portfolio',
  keywords: 'Full Stack Software Engineer, Front-End, Back-End, React, Next.js',
  description: 'Freelance, graduate of Hack Reactor Full Stack Software Engineering Immersive, Open to work'
}
export default Meta;
