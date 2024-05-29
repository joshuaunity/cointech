import './App.css'
import herOrnament from './assets/ornaments.svg';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Why from './components/Why';
import Testimonies from './components/Testimonies';
import BottomHero from './components/Bottomhero';
import Articles from './components/Articles';

function App() {
  return (
    <>
      <div className="relative -z-10">
        <img className='absolute top-0 right-0 lg:w-11/12' src={herOrnament} alt="" />
      </div>
      <Navbar />
      <Hero />

      <div className='container px-4 xl:mx-auto'>
        <Features />
        <Why />
        <Testimonies />
      </div>
      <BottomHero />
      <div className='container px-4 xl:mx-auto'>
        <Articles />
      </div>
      <div className='mt-24'>

      </div>
    </>
  )
}

export default App
