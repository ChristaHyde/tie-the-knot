import React from 'react'

import './styles.css'

export default function Hero({ children }) {
  return <div className="hero">
    {
      children
    }
  </div>
}