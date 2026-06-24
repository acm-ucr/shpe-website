import CalenderIcon from "@/public/icons/Calendar.webp";
import TitleBanner from "@/components/Title";
import EventsList from "@/components/ui/eventsList";
import UpcomingEventsData from "@/data/upcomingEventsData";

export const metadata = {
  title: "Calendar | SHPE @ UCR",
  description:
    "Discover upcoming events from the Society of Hispanic Professional Engineers at UC Riverside. Get involved in SHPE @ UCR's latest engineering activities.",
};

const Calendar = () => {
  return (
    <div>
      <TitleBanner title="CALENDAR" icon={CalenderIcon} decoration="gears" />
      <EventsList title="Upcoming Events" eventsData={UpcomingEventsData} />
    </div>
  );
};

export default Calendar;
