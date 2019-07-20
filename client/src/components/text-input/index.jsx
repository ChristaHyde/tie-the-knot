import React from 'react'

import './styles.css'

export default function TextInput({ type, name, label, value, changeHandler }) {
  return <div>
    <label htmlFor={name}>{label}</label>
    <input className="" type={type} name={name} value={value} onChange={changeHandler} />

  </div>
}
