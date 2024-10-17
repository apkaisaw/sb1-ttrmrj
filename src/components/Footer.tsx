import React from 'react'
import { Heart } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-white bg-opacity-70 text-purple-700 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="flex items-center justify-center">
          Made with <Heart size={16} className="mx-1 text-red-500" /> for Idealists
        </p>
        <p className="mt-2">&copy; 2024 Idealist Garden. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer