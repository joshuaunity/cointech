import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import herOrnament from './assets/ornaments.svg';

function App() {
  return (
    <>
      <div className="relative -z-10">
        <img className='absolute top-0 right-0 lg:w-11/12' src={herOrnament} alt="" />
      </div>
      <Navbar />
      <Hero />

      {/* <div className='conatainer px-4'>
      </div> */}

    </>
  )
}

export default App
