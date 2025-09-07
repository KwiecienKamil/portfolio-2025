import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const Services = () => {
    const underlineRef = useRef();

    console.log(underlineRef)

    useGSAP(() => {
         gsap.fromTo(
      underlineRef.current,
      { width: 0 }, 
      {
        width: "100%", 
        duration: 3,
        scrub: true,
      }
    )
    }, [])
  return (
    <section id='services'>
      <div className='relative text-[70px] uppercase font-poppins'>
        <p>Services</p>
        <span ref={underlineRef} className='absolute bottom-0 left-0 h-1 w-full bg-accent'/>
      </div>
    </section>
  )
}

export default Services
