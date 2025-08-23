import csiData from '../data/sbDetails.json'
import Image from 'next/image'

export default function SBDetails() {
  const data = csiData.details

  return (
    <section className="relative py-20 px-6 min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/sjcet.jpeg"
          alt="SJCET Campus Background"
          fill
          className="object-cover brightness-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-blue-800/20 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 text-gradient leading-tight drop-shadow-2xl text-white">
            {data.title}
          </h1>
          <div className="max-w-4xl mx-auto mb-12 animate-slide-in-left">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-100 mb-8 leading-relaxed tracking-wide">
              {data.brief}
            </h2>
          </div>
          <div className="glass-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500 animate-scale-in">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-50 leading-relaxed font-normal tracking-wide">
              {data.details}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
