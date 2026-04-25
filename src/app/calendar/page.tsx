import CalenderIcon from "@/public/banners/icons/Calendar.webp";
import Decor from "@/public/banners/Gallery-MeetTheTeam.webp";
import TitleBanner from "@/components/Title";

const Calendar = () => {
  return (
    <div>
      <TitleBanner
        title="Calender"
        description=""
        icon={CalenderIcon}
        decoration={Decor}
      />
      <p>Calendar</p>
    </div>
  );
};

export default Calendar;
