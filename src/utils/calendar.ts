export const addToCalendar = () => {
  const event = {
    title: "Teo's Birthday Party",
    location: "Lil' Kickers — 701 N. Milwaukee Ave., Vernon Hills, IL 60061",
    description: "Join us for Teo's birthday celebration!",
    start: new Date('2026-03-28T13:00:00'),
    end: new Date('2026-03-28T15:00:00'),
  };

  const icsContent = generateICS(event);
  downloadICS(icsContent, 'teo-birthday.ics');
};

const generateICS = (event: {
  title: string;
  location: string;
  description: string;
  start: Date;
  end: Date;
}) => {
  const formatDate = (date: Date): string => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  const icsLines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Teo Birthday//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `DTSTART:${formatDate(event.start)}`,
    `DTEND:${formatDate(event.end)}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description}`,
    `LOCATION:${event.location}`,
    'STATUS:CONFIRMED',
    'SEQUENCE:0',
    `UID:${Date.now()}@teobirthdayparty`,
    `DTSTAMP:${formatDate(new Date())}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ];

  return icsLines.join('\r\n');
};

const downloadICS = (content: string, filename: string) => {
  const blob = new Blob([content], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
