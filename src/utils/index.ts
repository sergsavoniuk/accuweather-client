import enLocale from 'date-fns/locale/en';
import ruLocale from 'date-fns/locale/ru';

import { TIME_FORMAT_EN, TIME_FORMAT_RU } from '@/constants/timeFormats';
import { RU } from '@/constants/languages';

const ACCUWEATHER_FILES_URL =
  'https://developer.accuweather.com/sites/default/files/';

export function formatImageSource(icon: string) {
  return `${ACCUWEATHER_FILES_URL}${formatImageFilename(icon)}`;
}

export function getDateLocale(language: string) {
  return language === RU ? ruLocale : enLocale;
}

export function getTimePattern(language: string) {
  return language === RU ? TIME_FORMAT_RU : TIME_FORMAT_EN;
}

function formatImageFilename(icon: string) {
  const filename = Number(icon) < 10 ? `0${icon}` : icon;
  return `${filename}-s.png`;
}
