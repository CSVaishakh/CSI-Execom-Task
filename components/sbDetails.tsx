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
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-black/40"></div>
      </div>

      {/* Content goes ABOVE the image */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent leading-tight drop-shadow-2xl">
            {data.title}
          </h1>
          <div className="max-w-4xl mx-auto mb-12">
            <h5 className="text-xl md:text-3xl lg:text-4xl font-light text-gray-100 mb-8 leading-relaxed tracking-wide">
              {data.brief}
            </h5>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500 hover:bg-white/15">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-50 leading-relaxed font-normal tracking-wide">
              {data.details}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
