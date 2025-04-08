import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import ThreeScene from './components/ThreeScene'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <ThreeScene />
      <About />
    </div>
  )
}
