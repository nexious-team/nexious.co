/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default ({ lang, onLangChange}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  }

  const onClose = () => {
    setIsOpen(false);
  }

  const onChangeLanguage = (lang) => {
    onClose();
    onLangChange(lang);
  }

  const flag = lang === 'En' ? 'united-states-of-america-flag-icon-32' : 'cambodia-flag-icon-32';

  return (
    <div className="fixed z-60 ml-2 mt-16 top-0 ">
      <div className="relative">
      <div onClick={onToggle} className="fadeInLeft relative z-10 block bg-gray-200 h-6 w-20 px-1 rounded overflow-hidden focus:outline-none focus:border-white flex">
        <span className="my-auto h-4 w-6 overflow-hidden">
          {<img className="object-cover h-full w-full" src={`/img/${flag}.png`} alt="Flag"/>}
        </span>
        <span className="my-auto ml-1">{lang}</span>
        <span className="my-auto ml-2"><FontAwesomeIcon icon="angle-down" size="sm"/></span>
      </div>
      {isOpen && <button onClick={onClose} tabIndex="-1" className="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default"></button>}
      {isOpen && (
        <div className="absolute left-0 w-20 bg-white rounded shadow-xl">
          <div onClick={() => onChangeLanguage('En')} className="block px-3 text-gray-800 hover:bg-indigo-500 hover:text-white">English</div>
          <div onClick={() => onChangeLanguage('Km')} className="block px-3 text-gray-800 hover:bg-indigo-500 hover:text-white">Khmer</div>
        </div>
      )}
    </div>
    </div>
  )
}