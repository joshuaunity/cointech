import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/features';
import Why from './components/Why';
import herOrnament from './assets/ornaments.svg';

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
      </div>

        <div className='mt-24'>
          
        </div>
    </>
  )
}

export default App
