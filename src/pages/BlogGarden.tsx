import React from 'react'
import { BookOpen, Edit, TrendingUp } from 'lucide-react'

const BlogGarden: React.FC = () => {
  return (
    <div className="web3-card">
      <h1 className="text-3xl font-bold text-green-300 mb-6 flex items-center">
        <BookOpen className="mr-2" size={32} />
        Blog Garden
      </h1>
      <p className="text-gray-300 mb-8">Write, read, and engage with thought-provoking content in our decentralized blogging platform.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-green-800 bg-opacity-30 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-green-300 mb-4 flex items-center">
            <Edit className="mr-2" size={24} />
            Start Writing
          </h2>
          <p className="text-gray-300 mb-4">Share your thoughts, ideas, and stories with the world.</p>
          <button className="web3-button bg-green-500 hover:bg-green-600">Create New Post</button>
        </section>

        <section className="bg-green-800 bg-opacity-30 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-green-300 mb-4 flex items-center">
            <TrendingUp className="mr-2" size={24} />
            Trending Topics
          </h2>
          <ul className="text-gray-300">
            <li className="mb-2">#Web3Revolution</li>
            <li className="mb-2">#SustainableFuture</li>
            <li className="mb-2">#CreativeEconomy</li>
            <li>#DecentralizedThought</li>
          </ul>
        </section>
      </div>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-green-300 mb-4">Recent Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample blog post cards */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-green-800 bg-opacity-30 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-green-300 mb-2">The Future of Decentralized Blogging</h3>
              <p className="text-gray-300 text-sm mb-4">Exploring how blockchain technology is revolutionizing content creation and distribution...</p>
              <div className="flex justify-between items-center text-xs text-gray-400">
                <span>By CryptoWriter</span>
                <span>5 min read</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default BlogGarden