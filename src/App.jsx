import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/hero'
import Whoweare from './components/whoweare/whoweare'
import Whatweoffer from './components/Whatweoffer/Whatweoffer'
import Ourvalue from './components/ourvalue/Ourvalue'
import Testimonials from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
const App = () => {
  return (
    <div className=' overflow-x-hidden text-white'> 
    <Navbar/>
    <Hero/>
    <Whoweare/>
    <Whatweoffer/>
    <Ourvalue/>
    <Testimonials/>
    <Contact/>
    </div>
  )
}

export default App