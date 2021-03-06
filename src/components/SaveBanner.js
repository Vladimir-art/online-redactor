import React from 'react';
import file from '../images/file.svg';
import html from '../images/html.svg';
import json from '../images/json.svg';
import html2canvas from 'html2canvas';

function SaveBanner() {

  function saveSectionAsImage(e) {
    html2canvas(document.querySelector('.constructor'), { proxy: false, useCORS: true, scrollX: 0, scrollY: -window.scrollY })
      .then((canvas) => {
        const linkTag = e.target.parentElement;
        linkTag.href = canvas.toDataURL('image/png');
        linkTag.download = 'banner.png';
        linkTag.click();
      })
      .catch((err) => console.log(err));
  }

  function CopyToClipboard(e) {
    // Create a new textarea element and give it id='t'
    let textarea = document.createElement('textarea');
    textarea.id = 'text';
    // Optional step to make less noise on the page, if any!
    textarea.style.height = 0;
    // Now append it to your page somewhere, I chose <body>
    document.body.appendChild(textarea);
    // Give our textarea a value of whatever inside the div of id=containerid
    switch(e.target.alt) {
      case 'HTML':
        textarea.value = document.querySelector('.constructor').innerHTML;
        break;
      case 'JSON':
        textarea.value = JSON.stringify(document.querySelector('.constructor').innerHTML);
        break;
      default:
        break;
    }
    // Now copy whatever inside the textarea to clipboard
    let selector = document.querySelector('#text');
    selector.select();
    document.execCommand('copy');
    // Remove the textarea
    document.body.removeChild(textarea);
    alert(`copied successfully as ${e.target.alt}!`);
  }

  return (
    <section className="save">
      <a className="save__download" >
        <img className="save__image" src={file} alt="PNG" onClick={saveSectionAsImage} />
      </a>
      <button className="save__download" name="HTML" onClick={CopyToClipboard} >
        <img className="save__image" src={html} alt="HTML" />
      </button>
      <button className="save__download" name="JSON" onClick={CopyToClipboard} >
        <img className="save__image" src={json} alt="JSON" />
      </button>
    </section>
  )
}

export default SaveBanner;
