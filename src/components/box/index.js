import React from 'react'
import './style.css'

export default ({ title, content, description }) => {
  return (
    <section className="box container">
      <div className="box__title">{title}</div>
      <div className="box__content">{content}</div>
      <div className="box__description">{description}</div>
    </section>
  )
}
