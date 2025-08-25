import EventDetails from "@/components/eventsPage/eventDetails";
import EventsHeader from "@/components/eventsPage/header";

export default function Events() {
  return (
    <section className="min-h-screen">
      <EventsHeader />
      <div className="relative">
        {/* Background animation elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full animate-float opacity-30"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-indigo-100 rounded-full animate-float opacity-40" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-100 rounded-full animate-float opacity-20" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 right-10 w-28 h-28 bg-blue-50 rounded-full animate-float opacity-35" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        <EventDetails />
      </div>
    </section>
  );
}
