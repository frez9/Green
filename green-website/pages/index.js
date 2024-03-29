import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/navbar.tsx'
import Hero from '../components/hero.tsx'
import DualColumnLeft from '../components/dual-column-left.tsx'
import DualColumnRight from '../components/dual-column-right.tsx'
import ThreeColumnGrid from '../components/three-column-grid.tsx'
import TryCTA from '../components/try-cta.tsx'
import Footer from '../components/footer.tsx'
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from 'react-icons/io5';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

export default function HomePage() {
  
  var firstFeature = {
    heading: "Accept digital payments in-store & online",
    subtext: "Avoid high payment processing fees & protect your company's margins.",
    imageAlt: '',
    imageSrc: 'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    firstIcon: IoAnalyticsSharp,
    firstIconText: "Digital receipts",
    secondIcon: IoLogoBitcoin,
    secondIconText: "Instant settlements",
    thirdIcon: IoSearchSharp,
    thirdIconText: "No hardware or downloads",
  }

  var secondFeature = {
    heading: "Store your funds in a secure digital wallet",
    subtext: "Don't spend thousands for a basic business bank account. Get much more, for less.",
    imageAlt: '',
    imageSrc: 'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    firstIcon: IoAnalyticsSharp,
    firstIconText: "No account minimums",
    secondIcon: IoLogoBitcoin,
    secondIconText: "No hidden fees",
    thirdIcon: IoSearchSharp,
    thirdIconText: "Always free",
  }

  var thirdFeature = {
    heading: "Earn high yield on your money",
    subtext: "Stop letting your money collect dust. Grow your capital, beat inflation, & put your money to work.",
    imageAlt: '',
    imageSrc: 'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    firstIcon: IoAnalyticsSharp,
    firstIconText: "Up to 3% APY",
    secondIcon: null,
    secondIconText: null,
    thirdIcon: null,
    thirdIconText: null,
  }

  var fourthFeature = {
    heading: "Send digital payments",
    subtext: "Start paying your employees, suppliers, bills, & taxes electronically. It’s easier for everyone.",
    imageAlt: '',
    imageSrc: 'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    firstIcon: IoAnalyticsSharp,
    firstIconText: "Instant settlements",
    secondIcon: IoLogoBitcoin,
    secondIconText: "Scheduled payments",
    thirdIcon: null,
    thirdIconText: null,
  }

  var fifthFeature = {
    heading: "Connect to your existing tools",
    subtext: "Streamline your workflow & boost productivity with unified systems. Easily integrate your point of sale & bookkeeping software.",
    imageAlt: '',
    imageSrc: 'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    firstIcon: IoAnalyticsSharp,
    firstIconText: "Custom integrations",
    secondIcon: null,
    secondIconText: null,
    thirdIcon: null,
    thirdIconText: null,
  }

  var firstGrid = {
    firstIcon: FcAssistant,
    firstTitle: "Fully Compliant",
    firstSubtext: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...",
    secondIcon: FcDonate,
    secondTitle: "Safe & Secure",
    secondSubtext: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...",
    thirdIcon: FcInTransit,
    thirdTitle: '24/7 Support',
    thirdSubtext: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...",
  }



  return (
    <div>
      <Head>
        <title>Green</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <Hero />
      <DualColumnLeft {...firstFeature} />
      <br></br>
      <br></br>
      <br></br>
      <DualColumnRight {...secondFeature}/>
      <br></br>
      <br></br>
      <br></br>
      <DualColumnLeft {...thirdFeature}/>
      <br></br>
      <br></br>
      <br></br>
      <DualColumnRight {...fourthFeature}/>
      <br></br>
      <br></br>
      <br></br>
      <DualColumnLeft {...fifthFeature}/>
      <br></br>
      <br></br>
      <br></br>
      <ThreeColumnGrid {...firstGrid}/>
      <br></br>
      <br></br>
      <br></br>
      <TryCTA />
      <br></br>
      <br></br>
      <br></br>
      <Footer />

    </div>
  )
}
