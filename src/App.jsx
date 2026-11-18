
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Contact from './components/Contact.jsx'
import WorkTracker from './components/WorkTracker.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WorkTracker />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
