import React from 'react';
import file from '../images/file.svg';
import html from '../images/html.svg';
import json from '../images/json.svg';
import html2canvas from 'html2canvas';

function SaveBanner() {

  function saveSectionAsImage(e) {
    html2canvas(document.querySelector('.constructor'))
      .then((canvas) => {
        const linkTag = e.target.parentElement;
        linkTag.href = canvas.toDataURL('image/png');
        linkTag.download = 'banner.png';
        linkTag.click();
      })
      .catch((err) => console.log(err));
  }

  return (
    <section className="save">
      <a  className="save__download" >
        <img className="save__image" src={file} alt="PNG" onClick={saveSectionAsImage} />
      </a>
      <a href="/" className="save__download" >
        <img className="save__image" src={html} alt="HTML" />
      </a>
      <a href="/" className="save__download" >
        <img className="save__image" src={json} alt="json" />
      </a>
    </section>
  )
}

export default SaveBanner;
