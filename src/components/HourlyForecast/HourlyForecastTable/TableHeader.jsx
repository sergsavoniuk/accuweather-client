import React from 'react';
import { useTranslation } from 'react-i18next';

const headers = ['time', 'temperature', 'precipation'];

function TableHeader() {
  const [t] = useTranslation();
  return (
    <thead>
      <tr>
        {headers.map(header => (
          <th key={header}>{t(`HourlyForecast.column.${header}`)}</th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
