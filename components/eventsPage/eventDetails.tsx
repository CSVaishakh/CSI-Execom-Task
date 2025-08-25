import EventCard from "@/components/eventsPage/eventCard";
import eventsData from "../../data/eventsData.json";

export default function EventDetails() {
  return (
    <section className="w-full min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-wrap justify-center items-start gap-8">
          {eventsData.map((event) => (
            <div key={event.id} className="flex-shrink-0 w-80 max-w-sm">
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
