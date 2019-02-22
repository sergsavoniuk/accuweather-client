import { format } from "date-fns";

const ACCUWEATHER_FILES_URL =
  "https://developer.accuweather.com/sites/default/files/";

export function getFormattedDate(datetime, tokens, locale) {
  return format(new Date(datetime), tokens, { locale }).split(",");
}

export function formatImageSource(icon) {
  return `${ACCUWEATHER_FILES_URL}${formatImageFilename(icon)}`;
}

function formatImageFilename(icon) {
  const filename = icon < 10 ? `0${icon}` : icon;
  return `${filename}-s.png`;
}
