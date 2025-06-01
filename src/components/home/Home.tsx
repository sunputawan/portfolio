import React from 'react'

const Home = () => {
  return (
    <div className='h-screen flex flex-col gap-8 justify-center items-center tracking-wider'>
        {/* backround */}
        <div className="absolute top-0 w-full h-screen bg-[url('/images/background/home.png')] bg-center bg-cover -z-10"/>
        <h1 className='text-7xl font-bold'>SUN PUTAWAN</h1>
        <p className='text-2xl'>COMPUTER ENGINEERING, CHULALONGKORN UNIVERSITY</p>
    </div>
  )
}

export default Home