import { useState, useEffect } from 'react'
import heroImage from '../assests/shinto-hero.jpg'

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0)

  // const handleScroll = () => {
  //   setOffsetY(window.scrollY * 0.5)
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundPosition: `center ${offsetY}px`
      }}
    >
      <h1>Explore Japan’s Most Beautiful Shrines</h1>
      <p>
        Discover ancient traditions, breathtaking architecture, and rich
        history.
      </p>
    </div>
  )
}

export default Hero
