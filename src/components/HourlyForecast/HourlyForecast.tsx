import React from 'react';

import {
  Table,
  TableHeader,
  TableBody,
  TableBodyProps,
} from './HourlyForecastTable';

function HourlyForecast({ data = [] }: TableBodyProps) {
  return (
    <Table>
      <TableHeader />
      <TableBody data={data} />
    </Table>
  );
}

export default HourlyForecast;
