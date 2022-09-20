import { useRouter } from 'next/router'

const Pay = () => {
    const router = useRouter()
    const { price, address } = router.query
  
    return <><p>Price: {price}</p><br></br><p>Address: {address}</p></>
  }
  
  export default Pay