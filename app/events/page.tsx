import EventDetails from "@/components/eventsPage/eventDetails";
import EventsHeader from "@/components/eventsPage/header";

export default function Events() {
  return (
    <section>
      <EventsHeader />
      <div>
        <EventDetails />
      </div>
    </section>
  );
}
