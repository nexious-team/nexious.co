import React from 'react';   
import { classNames } from "../utils";
const base = 'w-full focus:outline-none font-semibold rounded-lg disabled:opacity-50'

const styles = {
  'normal': 'bg-gray-500 hover:bg-gray-600 text-white border-gray-700',
  'action': 'bg-red-500 hover:bg-red-600 text-white border-red-700',
  'hook': 'bg-red-200 text-red-600 border-red-200'
}

const sizes = {
  'sm': 'py-1 px-2',
  'md': 'py-2 px-4',
  'lg': 'py-3 px-6'
}

export default function Button({ 
  style = 'action', 
  size = 'md', 
  text, 
  type, 
  onClick,
  ...props 
}) {

  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(base, styles[style], sizes[size])}
      {...props}
    >
      {text}
    </button>
  );
}
