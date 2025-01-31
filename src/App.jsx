import './App.css'
import ShrineList from './components/ShrineList'
import Hero from './components/Hero'
import About from './components/About'

function App() {
  return (
    <div className="flex-row">
      <Hero />
      <About />
      <ShrineList />
    </div>
  )
}
export default App
