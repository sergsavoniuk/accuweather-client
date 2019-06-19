import React, { Suspense } from 'react';
import { render } from 'react-dom';

import Root from './components/Root';
import Loader from './components/Loader';
import './i18n';

import * as serviceWorker from './serviceWorker';

render(
  <Suspense fallback={<Loader />}>
    <Root />
  </Suspense>,
  document.getElementById('root'),
);

serviceWorker.register();
