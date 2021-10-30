import React from 'react';   
import { classNames } from "../utils";
const base = 'focus:outline-none rounded-lg disabled:opacity-50'

const styles = {
  'normal': 'bg-gray-500 hover:bg-gray-600 text-white border-gray-700',
  'action': 'bg-gray-900 hover:bg-black text-white border-gray-900',
  'hook': 'bg-gray-200 text-gray-600 border-gray-200',
  'action-dark': 'bg-gray-100 hover:bg-white text-black border-gray-100',
}

const sizes = {
  'sm': 'py-1 px-2',
  'md': 'py-2 px-4',
  'lg': 'py-3 px-6'
}

export default function Button({ 
  _style = 'action', 
  size = 'md',
  className, 
  type, 
  onClick,
  children,
  ...props 
}) {

  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(base, styles[_style], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export const _Button = ({name, color, onPress, classes}) => {
  const styles = {
    container: `bg-${color}-500 hover:bg-${color}-700 focus:bg-${color}-500 border-${color}-600 px-4 py-2 rounded shadow`
  }
  return (
    <button className={`${styles.container} ${classes}`} onClick={onPress}>{name}</button>
  );
}
