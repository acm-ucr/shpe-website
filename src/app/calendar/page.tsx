import CalenderIcon from "@/public/icons/Calendar.webp";
import TitleBanner from "@/components/Title";
import EventsList from "@/components/ui/eventsList";
import UpcomingEventsData from "@/data/upcomingEventsData";

const Calendar = () => {
  return (
    <div>
      <TitleBanner title="CALENDAR" icon={CalenderIcon} decoration="gears" />
      <EventsList title="Upcoming Events" eventsData={UpcomingEventsData} />
    </div>
  );
};

export default Calendar;
