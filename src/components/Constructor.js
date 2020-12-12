import { observer } from 'mobx-react-lite';
import React from 'react';
import Store from '../store/Store';

const Constructor = observer(() => {
  return (
    <section className="constructor">
      <a className="constructor__link" href="/">
        <img className="constructor__image" src={Store.illustration} alt="Изображение" />
        <h3 className="constructor__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis massa augue,
          nec tincidunt tortor molestie nec. Fusce vel neque venenatis, ullamcorper magna ut,
          efficitur quam.
        </h3>
      </a>
    </section>
  )
})

export default Constructor;
