import { NeuralBackground } from './components/NeuralBackground/NeuralBackground'
import { Topbar } from './components/Topbar/Topbar'
import { Hero } from './components/Hero/Hero'
import { Ticker } from './components/Ticker/Ticker'
import { Experience } from './components/Experience/Experience'
import { AISection } from './components/AIBlock/AIBlock'
import { Skills } from './components/Skills/Skills'
import { Education } from './components/Education/Education'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import { SectionNav } from './components/SectionNav/SectionNav'

export function App() {
  return (
    <>
      <NeuralBackground />
      <Topbar />
      <SectionNav />
      <main className="shell">
        <Hero />
        <Ticker />
        <Experience />
        <AISection />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
