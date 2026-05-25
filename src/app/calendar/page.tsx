import CalenderIcon from "@/public/banners/icons/Calendar.webp";
import TitleBanner from "@/components/Title";

const Calendar = () => {
  return (
    <div>
      <TitleBanner title="CALENDAR" icon={CalenderIcon} decoration="gears" />
      <p>Calendar</p>
    </div>
  );
};

export default Calendar;
