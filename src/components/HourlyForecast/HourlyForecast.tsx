import React from 'react';

import { Table, TableHeader, TableBody } from './HourlyForecastTable';
import { TransformedHourlyForecast } from '@/components/WeatherForecast/ForecastTabs/utils';

export interface HourlyForecastProps {
  data: TransformedHourlyForecast[];
}

function HourlyForecast({ data = [] }: HourlyForecastProps) {
  return (
    <Table>
      <TableHeader />
      <TableBody data={data} />
    </Table>
  );
}

export default HourlyForecast;
