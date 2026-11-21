export const CIGARETTE_TIME_ZONE = "America/Toronto";

const WEEKDAY = new Intl.DateTimeFormat("en-CA", {
  timeZone: CIGARETTE_TIME_ZONE,
  weekday: "short",
});

const CLOCK = new Intl.DateTimeFormat("en-CA", {
  timeZone: CIGARETTE_TIME_ZONE,
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

/** Owner-approved weekly window: Mon-Thu 8pm-8am; Fri 5pm continuously through Mon 8am. */
export function isCigaretteScheduleActive(now = new Date()): boolean {
  const day = WEEKDAY.format(now);
  const parts = CLOCK.formatToParts(now);
  const hour = Number(parts.find((part) => part.type === "hour")?.value);
  const minute = Number(parts.find((part) => part.type === "minute")?.value);
  const minutes = hour * 60 + minute;

  if (day === "Sat" || day === "Sun") return true;
  if (day === "Fri") return minutes < 8 * 60 || minutes >= 17 * 60;
  return minutes < 8 * 60 || minutes >= 20 * 60;
}
