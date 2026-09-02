import Header from './components/Header'
import Hero from './components/Hero'
import MembershipHighlight from './components/MembershipHighlight'
import About from './components/About'
import Training from './components/Training'
import Referral from './components/Referral'
import GymTour from './components/GymTour'
import GymSystem from './components/GymSystem'
import AppPromo from './components/AppPromo'
import Pricing from './components/Pricing'
import Features from './components/Features'
import RegisterCTA from './components/RegisterCTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MembershipHighlight />

        <About />
        <Training />
        <Referral />

        <GymTour />
        <GymSystem />
        <AppPromo />
        <Pricing />
        <Features />
        <RegisterCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
