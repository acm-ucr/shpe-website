"use client";
import { useState } from "react";
import CalendarEventCard from "./calendarEventCard";
import CalendarPopUp from "./calendarPopUp";
import { CalendarEvent } from "./types";
import PopUp from "@/components/ui/popup";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isToday,
  isSameDay,
  isAfter,
  startOfDay,
} from "date-fns";
import { ChevronRight, ChevronLeft } from "lucide-react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const calendarDays = eachDayOfInterval({ start: startDate, end: endDate });

  const events: CalendarEvent[] = [
    {
      id: "1",
      title: "board apps open",
      start: new Date(2026, 1, 9, 17, 0),
      end: new Date(2026, 1, 9, 18, 0),
      location: "HUB 302",
      description: "apply to be part of shpe board",
    },
    {
      id: "2",
      title: "General Meeting",
      start: new Date(2026, 1, 9, 20, 0),
      end: new Date(2026, 1, 9, 21, 0),
      location: "Bourns Hall",
      description: "General SHPE meeting.",
    },
    {
      id: "3",
      title: "Study Session",
      start: new Date(2026, 1, 9, 19, 0),
      end: new Date(2026, 1, 9, 20, 0),
      description: "Group study session.",
    },
  ];

  const getEventsForDay = (day: Date) =>
    events.filter((event) => isSameDay(event.start, day));

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <div className="border-shpe-blue-100 mx-auto mb-10 w-11/12 border-3 p-4">
      <div className="flex flex-row justify-between pt-5 pb-2">
        <button
          className="text-shpe-gray-500 pl-3 text-3xl"
          onClick={() => setCurrentDate(subMonths(currentDate, 1))}
        >
          <ChevronLeft size={30} />
        </button>
        <div className="font-shpe-beachwood text-shpe-blue-100 text-3xl font-medium">
          {format(currentDate, "MMMM yyyy")}
        </div>
        <button
          className="text-shpe-gray-500 pr-3 text-3xl"
          onClick={() => setCurrentDate(addMonths(currentDate, 1))}
        >
          <ChevronRight size={30} />
        </button>
      </div>

      <div className="grid grid-cols-7">
        {weekDays.map((day, idx) => (
          <div
            key={day}
            className={`font-shpe-univers-condensed text-md text-center font-light ${idx !== 6 ? "border-r" : ""}`}
          >
            {day}
            <div className="mx-2 mt-2 border-b" />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7">
        {calendarDays.map((day, idx) => (
          <div
            key={day.toString()}
            className={`text-md font-shpe-univers min-h-27 border-b px-2 pt-1 ${isSameMonth(day, currentDate) ? "text-black" : "text-shpe-gray-500"} ${(idx + 1) % 7 === 0 ? "border-l-0.5" : "border-r"} `}
          >
            {!isSameMonth(day, currentDate) && day.getDate() === 1
              ? format(day, "MMM d")
              : format(day, "d")}

            {getEventsForDay(day).map((event, idx) => (
              <PopUp
                key={idx}
                clickableComponent={
                  <div>
                    <CalendarEventCard event={event} />
                  </div>
                }
                popupComponent={<CalendarPopUp event={event} />}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
