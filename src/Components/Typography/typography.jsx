import React from 'react'
import "./typography.css"
export const H1 = ({children}) => {
  return (
   <h1 className='typography-h1'>{children}</h1>
  )
}
export const H2 = ({children}) => {
  return (
   <h2 className='typography-h2'>{children}</h2>
  )
}

export const Span =({children})=>{
    return(
        <span className='typography-span'>{children}</span>
    )
}
