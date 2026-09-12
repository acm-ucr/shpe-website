import { CalendarEvent } from "./types";

const CalendarEventCard = ({ event: { title } }: { event: CalendarEvent }) => {
  return (
    <div className="bg-shpe-blue-050 font-shpe-univers text-shpe-white-100 mt-1 h-6 w-25 rounded-md px-[6px] py-1 text-center text-[11px] font-thin">
      {title}
    </div>
  );
};

export default CalendarEventCard;
