import './App.css'
import ShrineList from './components/ShrineList'
import Hero from './components/Hero'
import About from './components/About'
import Discover from './components/Discover'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex-row">
      <Hero />
      <About />
      <ShrineList />
      <Discover />
      <Footer />
    </div>
  )
}
export default App
