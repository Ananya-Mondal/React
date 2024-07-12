import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function Private() {
  return (localStorage.getItem("token")!==null)?<Outlet/>:<Navigate to={"/Login"}/>
}

export default Private