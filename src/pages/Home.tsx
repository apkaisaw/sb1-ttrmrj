import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Compass, Palette, BookOpen, Sparkles, Users, Globe } from 'lucide-react'

const modules = [
  { icon: Compass, title: "Persona Discovery", description: "Explore and discover your unique digital identity.", link: "/persona-discovery", color: "from-purple-200 to-indigo-200" },
  { icon: Palette, title: "Creative Hub", description: "Share your art, literature, and ideas as NFTs.", link: "/creative-hub", color: "from-indigo-200 to-blue-200" },
  { icon: BookOpen, title: "Blog Garden", description: "Write, read, and engage with thought-provoking content.", link: "/blog-garden", color: "from-blue-200 to-purple-200" },
]

const features = [
  { icon: Sparkles, title: "Unique Digital Identity", description: "Create and evolve your digital persona through our innovative MBTI-based system." },
  { icon: Users, title: "Community of Idealists", description: "Connect with like-minded individuals who share your passion for creativity and positive change." },
  { icon: Globe, title: "Decentralized Platform", description: "Enjoy the benefits of a Web3 ecosystem, ensuring your content remains truly yours." },
]

const Home: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="text-center min-h-screen flex flex-col justify-center items-center p-4 space-y-16">
      {/* Hero Section */}
      <section className="max-w-4xl">
        <h1 className="text-5xl font-bold text-purple-800 mb-6">Welcome to Idealist Garden</h1>
        <p className="text-xl text-purple-600 mb-10">A decentralized Web3 platform for creative idealists to express, connect, and make a difference.</p>
        <Link to="/persona-discovery" className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors duration-300">
          Start Your Journey
        </Link>
      </section>

      {/* Main Modules */}
      <section className="w-full max-w-6xl">
        <h2 className="text-3xl font-semibold text-purple-800 mb-8">Explore Our Ecosystem</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <Link
              key={module.title}
              to={module.link}
              className={`relative overflow-hidden rounded-lg transition-all duration-300 ease-in-out
                          bg-gradient-to-br ${module.color} hover:shadow-lg hover:scale-105`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="p-6 h-full flex flex-col justify-between">
                <module.icon className="text-purple-700 mb-4" size={40} />
                <div>
                  <h3 className="text-2xl font-semibold text-purple-800 mb-2">{module.title}</h3>
                  <p className={`text-purple-600 transition-all duration-300 ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                    {module.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-6xl">
        <h2 className="text-3xl font-semibold text-purple-800 mb-8">Why Choose Idealist Garden?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white bg-opacity-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <feature.icon className="text-purple-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-purple-800 mb-2">{feature.title}</h3>
              <p className="text-purple-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="w-full max-w-4xl bg-purple-100 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold text-purple-800 mb-4">Ready to Make a Difference?</h2>
        <p className="text-xl text-purple-600 mb-6">Join our community of creative idealists and start shaping a better future today.</p>
        <Link to="/persona-discovery" className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors duration-300">
          Create Your Persona
        </Link>
      </section>
    </div>
  )
}

export default Home