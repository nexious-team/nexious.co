import React from 'react'

export default function FlagButton ({ lang, onClickFlag }) {
  
  const flagName = lang === 'Km' ? 'united-states-of-america-flag-icon-32' : 'cambodia-flag-icon-32';

  return (
    <button className="my-auto h-4 w-6" onClick={onClickFlag}>
      {<img className="object-cover h-full w-full" src={`/img/${flagName}.png`} alt="Flag"/>}
    </button>
  )
}
