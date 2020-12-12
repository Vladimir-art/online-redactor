import { set } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import Store from '../store/Store';

const Redactor = observer(() => {

  function validIllustrationLink(event) {
    event.target.validity.valid &&
      Store.createIllustration(event.target.value);
  }

  return (
    <section className="redactor">
      <h1 className="redactor__title">Let's create a new banner!</h1>
      <form className="redactor__form" noValidate>
        <fieldset className="redactor__area">
          <label className="redactor__name" id="illustration">Enter illustration link:
            <input className="redactor__input"
              id="illustration"
              name="illustration"
              type="url"
              placeholder="Enter illustration"
              onChange={validIllustrationLink}
              required></input>
            <span className="redactor__error">Sorry, I can't find this illustration</span>
          </label>
          <label className="redactor__name" id="textarea">Enter some text:
            <textarea className="redactor__input"
              id="textarea"
              name="textarea"
              minLength="3"
              maxLength="255"
              placeholder="Enter some text"
              onChange={(e) => Store.changeText(e.target.value)}
              required></textarea>
            <span className="redactor__error">The text is so small</span>
          </label>
          <label className="redactor__name" id="background">Enter hex color #:
            <input className="redactor__input"
              id="background"
              name="background"
              maxLength="6"
              placeholder="FFFFFF"
              required></input>
            <span className="redactor__error">The text is not correctly</span>
          </label>
          <label className="redactor__name" id="link">Enter a link to your product:
            <input className="redactor__input"
              id="link"
              name="link"
              type="url"
              placeholder="Enter a link"
              required></input>
            <span className="redactor__error">Sorry, I can't find this link</span>
          </label>
        </fieldset>
      </form>
    </section>
  )
})

export default Redactor;
