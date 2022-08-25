import React from 'react'
import Head from 'next/head'
import SideBar from '../../components/admin/SideBar'

export default function dashboard() {
  return (
    <div className="font-poppins overflow-y-hidden bg-[#1a1d21]">
    <Head>
      <title>Dashboard-IntellCap</title>
      <link rel="icon" href="/favicon.ico" />
      <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Head>
    <SideBar/>
  </div>
  )
}
