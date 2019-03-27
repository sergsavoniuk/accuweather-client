import React from 'react';

import { Table, TableHeader, TableBody } from './HourlyForecastTable';

function HourlyForecast({ data }) {
  return (
    <Table>
      <TableHeader />
      <TableBody data={data} />
    </Table>
  );
}

HourlyForecast.propTypes = {
  data: TableBody.propTypes.data
};

HourlyForecast.defaultProps = {
  data: []
};

export default HourlyForecast;
