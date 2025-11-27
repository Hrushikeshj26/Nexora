import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Discover from './components/Discover'
import Product from './pages/Product'
import ScrollToTop from './components/ScrollToTop'
import Offers from './components/Offer'

function App() {
  return (
    <div className="bg-violet-200 min-h-screen flex flex-col">
      
      <Navbar />

      {/* Main Content Wrapper */}
      <main className="grow flex justify-center">
        <div className="w-full max-w-7xl px-4">
          <ScrollToTop />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Discover />
                  <Offers />
                </>
              }
            />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
