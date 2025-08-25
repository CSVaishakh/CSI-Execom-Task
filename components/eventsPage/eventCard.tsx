import { Event } from "@/types/types";
import Image from "next/image";

export interface eventProps {
  event: Event;
}

export default function EventCard({ event }: eventProps) {
  return (
    <section className="w-full h-96 border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-500 bg-white group transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
      {/* Animated background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
      
      <div className="h-full flex flex-col justify-between relative z-10">
        <div className="flex-1 overflow-hidden">
          <h3 className="text-xl font-bold mb-3 text-blue-600 group-hover:text-blue-700 transition-colors duration-300 transform group-hover:scale-[1.02]">
            {event.name}
          </h3>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 overflow-hidden">
            {event.descreption}
          </p>
        </div>
        
        <div className="text-sm text-gray-500 space-y-2 mt-auto transform group-hover:translate-x-1 transition-transform duration-300">
          <p className="flex items-start group-hover:text-gray-600 transition-colors duration-300">
            <span className="font-semibold w-16 flex items-center shrink-0">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
              Date:
            </span> 
            <span className="flex-1">{new Date(event.date).toLocaleDateString()}</span>
          </p>
          <p className="flex items-start group-hover:text-gray-600 transition-colors duration-300">
            <span className="font-semibold w-16 flex items-center shrink-0">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" style={{animationDelay: '0.2s'}}></span>
              Venue:
            </span> 
            <span className="flex-1 line-clamp-2">{event.venue}</span>
          </p>
          <p className="flex items-start group-hover:text-gray-600 transition-colors duration-300">
            <span className="font-semibold w-16 flex items-center shrink-0">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse" style={{animationDelay: '0.4s'}}></span>
              By:
            </span> 
            <span className="flex-1 line-clamp-2">{event.organiser}</span>
          </p>
        </div>
        
        {event.images && event.images.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1 transform group-hover:scale-105 transition-transform duration-300">
            {event.images.map((imgPath, index) => (
              <div 
                key={index}
                className="transform hover:scale-110 transition-transform duration-200 hover:z-10 relative"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <Image 
                  src={imgPath} 
                  alt={`${event.name} image ${index + 1}`}
                  width={60}
                  height={40}
                  className="rounded object-cover border-2 border-transparent hover:border-blue-300 transition-all duration-200"
                />
              </div>
            ))}
          </div>
        )}
        
        {/* Floating action indicator */}
        <div className="absolute top-2 right-2 w-3 h-3 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300 animate-pulse"></div>
      </div>
    </section>
  );
}
