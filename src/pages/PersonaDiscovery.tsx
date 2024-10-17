import React, { useState } from 'react'
import { Compass, ArrowRight, Image, Sparkles, CheckCircle } from 'lucide-react'

const mbtiTypes = ['ISTJ', 'ISFJ', 'INFJ', 'INTJ', 'ISTP', 'ISFP', 'INFP', 'INTP', 'ESTP', 'ESFP', 'ENFP', 'ENTP', 'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ']

const PersonaDiscovery: React.FC = () => {
  const [mbtiResult, setMbtiResult] = useState<string | null>(null)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [showMbtiSelect, setShowMbtiSelect] = useState(false)

  const startMBTITest = () => {
    console.log("Starting MBTI test")
    setTimeout(() => {
      const randomMBTI = mbtiTypes[Math.floor(Math.random() * mbtiTypes.length)]
      setMbtiResult(randomMBTI)
      generateImage(randomMBTI)
    }, 2000)
  }

  const selectMBTI = (type: string) => {
    setMbtiResult(type)
    generateImage(type)
  }

  const generateImage = (mbtiType: string) => {
    setGeneratedImage(`https://source.unsplash.com/random/400x400?abstract&${mbtiType}`)
  }

  return (
    <div className="bg-white bg-opacity-70 rounded-lg shadow-lg p-8 mb-8">
      <section className="mb-16">
        <div className="flex items-center justify-center mb-6">
          <Compass size={48} className="text-purple-600 mr-4" />
          <h1 className="text-4xl font-bold text-purple-800">Persona Discovery</h1>
        </div>
        <p className="text-purple-700 mb-8 text-center text-xl">Explore and discover your unique digital identity.</p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-purple-800 mb-6">MBTI Test</h2>
        <p className="text-purple-700 mb-4">Discover your personality type with our comprehensive MBTI test or select your known type.</p>
        {!mbtiResult && (
          <div className="flex space-x-4">
            <button onClick={startMBTITest} className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300 flex items-center">
              Start MBTI Test
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button onClick={() => setShowMbtiSelect(!showMbtiSelect)} className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300 flex items-center">
              Select MBTI Type
              <CheckCircle className="ml-2" size={20} />
            </button>
          </div>
        )}
        {showMbtiSelect && (
          <div className="mt-4 grid grid-cols-4 gap-2">
            {mbtiTypes.map(type => (
              <button
                key={type}
                onClick={() => selectMBTI(type)}
                className="bg-purple-200 text-purple-800 px-4 py-2 rounded-md hover:bg-purple-300 transition-colors duration-300 text-sm"
              >
                {type}
              </button>
            ))}
          </div>
        )}
        {mbtiResult && (
          <div className="mt-4 p-4 bg-purple-100 rounded-lg">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4 flex items-center">
              <CheckCircle className="mr-2 text-green-600" size={24} />
              Your MBTI Result
            </h3>
            <p className="text-purple-700 text-xl">Your MBTI type: <span className="font-bold text-purple-900">{mbtiResult}</span></p>
          </div>
        )}
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-purple-800 mb-6">SoulForge</h2>
        <p className="text-purple-700 mb-4">Your unique image representing your digital soul, based on your MBTI type.</p>
        <div className="flex flex-col items-center">
          {generatedImage ? (
            <div className="mt-4 p-4 bg-purple-100 rounded-lg">
              <img src={generatedImage} alt="Generated Soul Image" className="w-full max-w-md rounded-lg shadow-lg" />
            </div>
          ) : mbtiResult ? (
            <p className="text-purple-600">Your SoulForge image is being generated...</p>
          ) : (
            <p className="text-purple-700">Complete the MBTI test or select your type to generate your SoulForge image.</p>
          )}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-purple-800 mb-6">EvolveSelf</h2>
        <p className="text-purple-700 mb-4">Personalized suggestions to evolve based on your MBTI type.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <EvolveSelfCard
            title="Self-Reflection"
            description="Take time each day to reflect on your thoughts and actions. This practice can help you better understand your motivations and decision-making processes."
          />
          <EvolveSelfCard
            title="Explore New Perspectives"
            description="Challenge yourself to see situations from different viewpoints. This can broaden your understanding and improve your interpersonal skills."
          />
          <EvolveSelfCard
            title="Develop Complementary Skills"
            description="Focus on areas that may not come naturally to you. This can help create a more well-rounded personality and skill set."
          />
          <EvolveSelfCard
            title="Practice Mindfulness"
            description="Engage in mindfulness exercises to increase your self-awareness and emotional intelligence."
          />
        </div>
      </section>
    </div>
  )
}

interface EvolveSelfCardProps {
  title: string
  description: string
}

const EvolveSelfCard: React.FC<EvolveSelfCardProps> = ({ title, description }) => {
  return (
    <div className="bg-purple-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      <h3 className="text-2xl font-semibold text-purple-800 mb-3 flex items-center">
        <Sparkles size={24} className="mr-2 text-yellow-500" />
        {title}
      </h3>
      <p className="text-purple-700">{description}</p>
    </div>
  )
}

export default PersonaDiscovery