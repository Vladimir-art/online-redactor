import { observer } from 'mobx-react-lite';
import React from 'react';
import Store from '../store/Store';

const Constructor = observer(() => {
  return (
    <section className="constructor">
      <a className="constructor__link" href="/">
        <img className="constructor__image" src={Store.illustration} alt="Изображение" />
        <h3 className="constructor__text">
          {Store.text}
        </h3>
      </a>
    </section>
  )
})

export default Constructor;
