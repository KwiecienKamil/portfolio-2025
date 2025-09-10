import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import  { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const SectionHeader = ({ sectionName}) => {
    const underlineRef = useRef();
    const scrollRef = useRef();


    useGSAP(() => {
      gsap.fromTo(
      underlineRef.current,
      { width: 0 }, 
      {
        width: "100%", 
        duration: 3,
        scrollTrigger: {
          trigger: scrollRef.current,
          start: "top 60%",
          end: "top 0%",
          toggleActions: "play reverse play reverse",
          scrub: false,
      }
      }
    )
    }, [])
  return (
    <section>
      <div ref={scrollRef} className={`relative text-[70px] uppercase font-poppins`}>
        <p>{sectionName}</p>
        <span ref={underlineRef} className='absolute bottom-0 left-0 h-1 w-full bg-accent'/>
      </div>
    </section>
  )
}

export default SectionHeader
