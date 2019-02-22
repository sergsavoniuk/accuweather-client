import React from "react";
import { render } from "react-dom";
import Root from "./components/Root";

import Loader from "components/Loader";
import "./i18n";

render(
  <React.Suspense fallback={<Loader />}>
    <Root />
  </React.Suspense>,
  document.getElementById("root")
);
