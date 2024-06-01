import React from 'react'
import { Link } from 'react-router-dom'
import { HiMiniArrowLongRight } from "react-icons/hi2";

const Button = () => {
  return (
    <>
    
    <Link  className=' flex justify-between items-center gap-[10px] py-[15px] pl-[29px] pr-[29px] bg-parbel font-dm text-[18px] font-normal rounded-[500px] text-white leading-[26px]' to='/'>Free Quote<span className=' text-[26px]'><HiMiniArrowLongRight /></span></Link>

    </>
  )
}

export default Button

