import './Appsubmitbutton.css'
import React from 'react'

export default function Appsubmitbutton({onClick,title}) {
  return (
    <button className = "btn btn-primary" type='submit' onClick={onClick} >{title}</button>
  )
}