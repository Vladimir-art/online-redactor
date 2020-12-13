import React from 'react';
import Redactor from './Redactor';
import Constructor from './Constructor';
import SaveBanner from './SaveBanner';
import { observer } from 'mobx-react-lite';
import Store from '../store/Store';

const Main = observer(() => {
  return (
    <main className="main">
      <Redactor />
      <Constructor />
      <SaveBanner />
    </main>
  )
})

export default Main;
