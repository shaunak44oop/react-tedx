export type ScheduleItem = {
  id: string;
  time: string;
  title: string;
  subtitle: string;
  tag?: "Break";
};

// Edit this array to update the day-of program. Order matters — items
// render top to bottom exactly as listed here.
export const schedule: ScheduleItem[] = [
  {
    id: "sc-1",
    time: "8:30 – 9:00 AM",
    title: "Doors open & registration",
    subtitle: "Check in, grab a seat, browse the program",
    tag: "Break",
  },
  {
    id: "sc-2",
    time: "9:00 – 9:10 AM",
    title: "Welcome & opening remarks",
    subtitle: "Organizing Team",
  },
  {
    id: "sc-3",
    time: "9:10 – 9:22 AM",
    title: '"Talk Title Goes Here"',
    subtitle: "Speaker Name",
  },
  {
    id: "sc-4",
    time: "9:22 – 9:34 AM",
    title: '"Talk Title Goes Here"',
    subtitle: "Speaker Name",
  },
  {
    id: "sc-5",
    time: "9:34 – 9:46 AM",
    title: '"Talk Title Goes Here"',
    subtitle: "Speaker Name",
  },
  {
    id: "sc-6",
    time: "9:46 – 10:05 AM",
    title: "Morning break",
    subtitle: "Coffee, snacks, and a stretch",
    tag: "Break",
  },
  {
    id: "sc-7",
    time: "10:05 – 10:17 AM",
    title: '"Talk Title Goes Here"',
    subtitle: "Speaker Name",
  },
  {
    id: "sc-8",
    time: "10:17 – 10:29 AM",
    title: '"Talk Title Goes Here"',
    subtitle: "Speaker Name",
  },
  {
    id: "sc-9",
    time: "10:29 – 10:41 AM",
    title: '"Talk Title Goes Here"',
    subtitle: "Speaker Name",
  },
  {
    id: "sc-10",
    time: "10:45 – 11:00 AM",
    title: "Closing remarks",
    subtitle: "Organizing Team",
  },
  {
    id: "sc-11",
    time: "11:00 – 11:30 AM",
    title: "Reception",
    subtitle: "Meet the speakers in the lobby",
    tag: "Break",
  },
];
