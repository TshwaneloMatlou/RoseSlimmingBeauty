import React from 'react'
import { Link } from 'react-router-dom'
import TopBanner from '../components/TopBanner'
import BottomCards from '../components/BottomCards'

const Home = () => {
  return (
    <div>
      <TopBanner /> 

      <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
        <div>
          <img src="/image_2.png" alt="Image2" />
        </div>
        <div className='shadow-xl shadow-pink-500 rounded flex flex-col justify-center items-center'>
          <h1 className="text-center text-3xl font-extrabold font-serif m-5">It's not a diet, it's a lifestyle change!</h1>
          <p className="text-center">Strive For Progress, Not Perfection.</p>
        </div>
        <div className='shadow-xl shadow-pink-500 rounded flex flex-col justify-center items-center'>
          <h1 className="text-center text-3xl font-extrabold font-serif m-5">What we do</h1>
          <h3 className="text-center m-5">The following is a list of services that we offer. Create your desired body today!</h3>
          <ul>
            <li className='p-2'>• Fir Sauna Dome </li>
            <li className='p-2'>• Laser Lipo </li>
            <li className='p-2'>• Faradic Machine </li>
            <li className='p-2'>• Fat Freezing </li>
            <li className='p-2'>• Butt and Hip Lift</li>
            <li className='p-2'>• Inbody Scan</li>
          </ul>
          <Link to="./Services">
            <button className='bg-purple-500 rounded-lg py-2 px-32 m-5 font-extrabold text-white hover:bg-pink-500'>
              All Services
            </button>
          </Link>
        </div>
        <div>
          <img src="./image_3.png" alt="Image3" />
        </div>
      </div>


      <BottomCards />

    </div>
  )
}

export default Home
