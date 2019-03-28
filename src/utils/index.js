import { format } from 'date-fns';
import enLocale from 'date-fns/locale/en';
import ruLocale from 'date-fns/locale/ru';

import { TIME_FORMAT_EN, TIME_FORMAT_RU } from 'constants/timeFormats';
import { RU } from 'constants/languages';

const ACCUWEATHER_FILES_URL =
  'https://developer.accuweather.com/sites/default/files/';

export function getFormattedDate(datetime, tokens, locale) {
  return format(new Date(datetime), tokens, { locale }).split(',');
}

export function formatImageSource(icon) {
  return `${ACCUWEATHER_FILES_URL}${formatImageFilename(icon)}`;
}

export function getDateLocale(language) {
  return language === RU ? ruLocale : enLocale;
}

export function getTimePattern(language) {
  return language === RU ? TIME_FORMAT_RU : TIME_FORMAT_EN;
}

function formatImageFilename(icon) {
  const filename = icon < 10 ? `0${icon}` : icon;
  return `${filename}-s.png`;
}
