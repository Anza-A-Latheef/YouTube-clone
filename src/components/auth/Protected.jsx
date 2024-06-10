import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Protected(props) {
  const {Component}=props
  const navigate=useNavigate()

  const token = localStorage.getItem('token')
  
    useEffect(()=>{
        if(!token){
            navigate("/login")
        }
    })

    return (
    <>
      <Component/>
    </>
  )
}

