import React from 'react'

const HeroHeader = () => {
  return (
    <div className='px-[5%] pb-[8rem] z-2 '>
        <div className='mb-6 cursor-default'>
          <h1 className='text-[70px] font-[600]'>Hello, my name is <span className='text-accent font-[900]'>Kamil</span></h1>
          <p className='text-3xl'>I'm creative Frontend Developer based in Poland</p>
        </div>
        <button className='px-6 py-4 bg-accent text-light hover:bg-[#a58d05] duration-500 cursor-pointer'>Get in touch</button>
    </div>
  )
}

export default HeroHeader
