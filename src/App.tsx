import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import PersonaDiscovery from './pages/PersonaDiscovery'
import CreativeHub from './pages/CreativeHub'
import BlogGarden from './pages/BlogGarden'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/persona-discovery" element={<PersonaDiscovery />} />
            <Route path="/creative-hub" element={<CreativeHub />} />
            <Route path="/blog-garden" element={<BlogGarden />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App