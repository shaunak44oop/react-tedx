export type ScheduleItem = {
  id: string;
  time: string;
  title: string;
  section?: string;
  tag?: "Break";
};

// Edit this array to update the day-of program. Order matters — items
// render top to bottom exactly as listed here. `section` groups items
// under a heading; the heading shows once, above the first item that
// carries a new section value.
export const schedule: ScheduleItem[] = [
  {
    id: "sc-1",
    section: "Venue Arrival",
    time: "3:00 PM",
    title: "Registrations open",
  },
  {
    id: "sc-2",
    section: "Venue Arrival",
    time: "3:45 PM",
    title: "Registrations & entry close",
  },
  {
    id: "sc-3",
    section: "Event Begins",
    time: "4:00 – 4:25 PM",
    title: "Welcome",
  },
  {
    id: "sc-4",
    section: "Speaker Sessions — Part 1",
    time: "4:30 – 4:50 PM",
    title: "[Guest]",
  },
  {
    id: "sc-5",
    section: "Speaker Sessions — Part 1",
    time: "4:50 – 5:10 PM",
    title: "Archit Khandelwal",
  },
  {
    id: "sc-6",
    section: "Speaker Sessions — Part 1",
    time: "5:10 – 5:30 PM",
    title: "Sreenidi Sriram",
  },
  {
    id: "sc-7",
    section: "High Tea Break",
    time: "5:30 – 6:00 PM",
    title: "Refreshments",
    tag: "Break",
  },
  {
    id: "sc-8",
    section: "Speaker Sessions — Part 2",
    time: "6:00 – 6:20 PM",
    title: "[Guest]",
  },
  {
    id: "sc-9",
    section: "Speaker Sessions — Part 2",
    time: "6:20 – 6:40 PM",
    title: "Avirbhav Danamaraju",
  },
  {
    id: "sc-10",
    section: "Speaker Sessions — Part 2",
    time: "6:40 – 6:55 PM",
    title: "Meghna Daka",
  },
  {
    id: "sc-11",
    section: "Closing",
    time: "6:55 – 7:00 PM",
    title: "National Anthem",
  },
];