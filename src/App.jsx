import Header from './components/Header'
import Hero from './components/Hero'
import ThreeScene from './components/ThreeScene'
import MediumArticles from './components/MediumArticles';
import About from './components/About';
import './components/MediumArticles.module.css';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <ThreeScene />
      <About />
      <MediumArticles />
    </div>
  )
}
