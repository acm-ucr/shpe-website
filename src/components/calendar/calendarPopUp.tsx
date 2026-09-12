import { CalendarEvent } from "./types";
import { format } from "date-fns";

const CalendarPopUp = ({
  event: { title, start, end, location, description },
}: {
  event: CalendarEvent;
}) => {
  return (
    <div className="font-shpe-inter bg-shpe-white-100 rounded-md p-2">
      <div className="bg-shpe-orange-500/50 text-shpe-blue-200/95 rounded-sm p-4 text-center text-3xl font-bold">
        {title}
      </div>
      <div className="p-2 text-xl">
        Date: {format(start, "EEEE, MMMM d")} <br />
        Time: {format(start, "h-")}
        {format(end, "h aa")}, {location}
      </div>
      <div className="text-md px-2">Description: {description}</div>
    </div>
  );
};

export default CalendarPopUp;
