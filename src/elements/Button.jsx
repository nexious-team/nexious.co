import React from 'react'

const Button = ({name, color, onPress, classes}) => {
  const styles = {
    container: `bg-${color}-500 hover:bg-${color}-700 focus:bg-${color}-500 border-${color}-600 px-4 py-2 rounded shadow`
  }
  return (
    <button className={`${styles.container} ${classes}`} onClick={onPress}>{name}</button>
  );
}

export default Button
