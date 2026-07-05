export type WeddingEvent = {
  id: string;
  emoji: string;
  name: string;
  titleMain: string;
  titleScript: string;
  tagline: string;
  date: string;
  day: string;
  time: string;
  /** machine-readable start, used by the Add-to-Calendar button */
  startISO: string;
  durationHours: number;
  venue: string;
  venueLine2?: string;
  mapsUrl: string;
  accent: "mehendi" | "nikah" | "maroon" | "blush";
};

export const NIKAH_DATE_ISO = "2026-08-01T11:30:00+05:30";

export const events: WeddingEvent[] = [
  {
    id: "mehendi",
    emoji: "🌿",
    name: "Mehendi Ceremony",
    titleMain: "Mehendi",
    titleScript: "Ceremony",
    tagline: "An evening of henna, marigolds & music",
    date: "31 July 2026",
    day: "Friday",
    time: "2:00 PM",
    startISO: "2026-07-31T14:00:00+05:30",
    durationHours: 4,
    venue: "AR Garden",
    venueLine2: "Kumbra, Puttur",
    mapsUrl: "https://maps.google.com/?q=P69F%2BPG5+Puttur+Karnataka",
    accent: "mehendi",
  },
  {
    id: "nikah",
    emoji: "🕌",
    name: "Nikah Ceremony",
    titleMain: "Nikah",
    titleScript: "Ceremony",
    tagline: "The sacred bond, sealed in faith",
    date: "01 August 2026",
    day: "Saturday",
    time: "11:30 AM",
    startISO: "2026-08-01T11:30:00+05:30",
    durationHours: 3,
    venue: "Indian Auditorium",
    venueLine2: "Nerlakatte, Mani",
    mapsUrl: "https://maps.google.com/?q=R49M%2BJ4V+Peraje",
    accent: "nikah",
  },
  {
    id: "reception-groom",
    emoji: "✨",
    name: "Reception — Groom's Side",
    titleMain: "Reception",
    titleScript: "Groom's Side",
    tagline: "An evening of celebration, laughter & blessings",
    date: "02 August 2026",
    day: "Sunday",
    time: "7:00 PM",
    startISO: "2026-08-02T19:00:00+05:30",
    durationHours: 3,
    venue: "AR Garden",
    venueLine2: "Kumbra",
    mapsUrl: "https://maps.google.com/?q=P69F%2BPG5+Puttur+Karnataka",
    accent: "maroon",
  },
  {
    id: "reception-bride",
    emoji: "🤍",
    name: "Reception — Bride's Side",
    titleMain: "Reception",
    titleScript: "Bride's Side",
    tagline: "White roses & warm farewells",
    date: "03 August 2026",
    day: "Monday",
    time: "7:00 PM",
    startISO: "2026-08-03T19:00:00+05:30",
    durationHours: 3,
    venue: "St. Sebastian Centenary Auditorium",
    venueLine2: "Bendur, Mangaluru",
    mapsUrl: "https://maps.google.com/?q=VVG5%2B976+Mallikatte+Bendoor",
    accent: "blush",
  },
];
