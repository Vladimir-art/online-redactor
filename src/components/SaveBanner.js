import React from 'react';
import file from '../images/file.svg';
import html from '../images/html.svg';
import json from '../images/json.svg';

function SaveBanner() {
  return (
    <section className="save">
      <a href="/" className="save__download" download="kkk">
        <img className="save__image" src={file} alt="PNG" />
      </a>
      <a href="/" className="save__download" download="kkk">
        <img className="save__image" src={html} alt="HTML" />
      </a>
      <a href="/" className="save__download" download="kkk">
        <img className="save__image" src={json} alt="json" />
      </a>
    </section>
  )
}

export default SaveBanner;
