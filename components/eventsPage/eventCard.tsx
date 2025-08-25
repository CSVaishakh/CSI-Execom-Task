import { Event } from "@/types/types";
import Image from "next/image";

export interface eventProps {
  event: Event;
}

export default function EventCard({ event }: eventProps) {
  return (
    <section className="w-full aspect-square border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow bg-white">
      <div className="h-full flex flex-col justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-2 text-blue-600 line-clamp-2">{event.name}</h3>
          <p className="text-sm text-gray-600 mb-3 flex-grow overflow-hidden line-clamp-3">{event.descreption}</p>
        </div>
        <div className="text-xs text-gray-500 space-y-1 mt-auto">
          <p className="flex"><span className="font-semibold w-16">Date:</span> <span className="flex-1">{new Date(event.date).toLocaleDateString()}</span></p>
          <p className="flex"><span className="font-semibold w-16">Venue:</span> <span className="flex-1 line-clamp-1">{event.venue}</span></p>
          <p className="flex"><span className="font-semibold w-16">By:</span> <span className="flex-1 line-clamp-1">{event.organiser}</span></p>
        </div>
        {event.images && event.images.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {event.images.map((imgPath, index) => (
              <Image 
                key={index} 
                src={imgPath} 
                alt={`${event.name} image ${index + 1}`}
                width={60}
                height={40}
                className="rounded object-cover"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
