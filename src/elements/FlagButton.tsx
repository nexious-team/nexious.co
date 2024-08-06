import React from 'react'

interface FlagButtonProps {
  lang: string;
  onClickFlag: () => void;
}
export default function FlagButton (props: FlagButtonProps) {
  const { lang, onClickFlag } = props;  
  const flagName = lang === 'Km' ? 'united_kingdom' : 'cambodia';

  return (
    <button className="my-auto h-6 w-8" onClick={onClickFlag}>
      {<img className="object-cover h-full w-full" src={`/img/${flagName}.png`} alt="Flag"/>}
    </button>
  )
}
