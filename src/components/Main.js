import React from 'react';
import Redactor from './Redactor';
import Constructor from './Constructor';
import SaveBanner from './SaveBanner';

function Main() {
  return (
    <main className="main">
      <Redactor />
      <Constructor />
      <SaveBanner />
    </main>
  )
}
export default Main;
