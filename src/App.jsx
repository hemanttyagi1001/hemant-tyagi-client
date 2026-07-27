import ToggleMenu from './components/ToggleMenu'
import Header from './components/Header'
import Nav from './components/Nav'
import AboutSection from './components/AboutSection'
import PortfolioSection from './components/PortfolioSection'
import ServicesSection from './components/ServicesSection'
import TestimonialSection from './components/TestimonialSection'
import ResumeSection from './components/ResumeSection'
import ClientsSection from './components/ClientsSection'
import BlogSection from './components/BlogSection'
import LegalSection from './components/LegalSection'
import ContactSection from './components/ContactSection'
import MapSection from './components/MapSection'
import BackgroundLines from './components/BackgroundLines'
import Preloader from './components/Preloader'

function App() {
  return (
    <>
      <ToggleMenu />

      <div className="container max-w-[1320px] mx-auto px-5 xl:px-3">
        <Header />

        <div className="space-y-6 lg:flex lg:space-x-8 lg:space-y-0 xl:space-x-12">
          <Nav />

          <div className="lg:w-3/4 space-y-6 pb-12">
            <AboutSection />
            <PortfolioSection />
            <ServicesSection />
            <TestimonialSection />
            <ResumeSection />
            <ClientsSection />
            <BlogSection />
            <LegalSection />
            <ContactSection />
            <MapSection />
          </div>
        </div>
      </div>

      <BackgroundLines />
      <Preloader />
    </>
  )
}

export default App
