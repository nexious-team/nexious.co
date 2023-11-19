import React from 'react'

interface FlagButtonProps {
  lang: string;
  onClickFlag: () => void;
}
export default function FlagButton (props: FlagButtonProps) {
  const { lang, onClickFlag } = props;  
  const flagName = lang === 'Km' ? 'united-states-of-america-flag-icon-32' : 'cambodia-flag-icon-32';

  return (
    <button className="my-auto h-4 w-6" onClick={onClickFlag}>
      {<img className="object-cover h-full w-full" src={`/img/${flagName}.png`} alt="Flag"/>}
    </button>
  )
}
