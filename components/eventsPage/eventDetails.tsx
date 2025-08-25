import EventCard from "@/components/eventsPage/eventCard";
import eventsData from "../../data/eventsData.json";

export default function EventDetails() {
  return (
    <section className="w-full min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl animate-fade-in-up">
        {/* Section Title with Animation */}
        <div className="text-center mb-12 animate-fade-in-down">
          <h2 className="text-4xl font-bold text-gradient mb-4">Our Events</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover exciting events, workshops, and competitions organized by CSI SJCET
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-start gap-8">
          {eventsData.map((event, index) => (
            <div 
              key={event.id} 
              className="flex-shrink-0 w-full sm:w-80 md:w-96 lg:w-80 xl:w-96 animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
