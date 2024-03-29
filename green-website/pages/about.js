import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/navbar.tsx'
import OurStory from '../components/our-story.tsx'
import Footer from '../components/footer.tsx'
import HeadingWithSubtext from '../components/heading.tsx'

export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>Green</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <br></br>
      <br></br>
      {/* <Heading>About Green</Heading> */}
      {/* <HeadingWithSubtext /> */}
      <OurStory />


      {/* <DualColumnRight /> */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />

    </div>
  )
}
