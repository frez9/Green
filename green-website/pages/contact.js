import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/navbar.tsx'
import Contact from '../components/contact.tsx'
import Footer from '../components/footer.tsx'

export default function ContactPage() {
  return (
    <div>
      <Head>
        <title>Green</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <Contact />
      <Footer />

    </div>
  )
}