import React from "react";

import { Table, TableHeader, TableBody } from "./HourlyForecastTable";

function HourlyForecast({ data = [] }) {
  return (
    <Table>
      <TableHeader />
      <TableBody data={data} />
    </Table>
  );
}

export default HourlyForecast;
