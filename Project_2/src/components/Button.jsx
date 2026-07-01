import React from 'react'
import { TbMessageDots } from "react-icons/tb";


const Button = ({isOutline, icon, text}) => {
  return (
    <button
      className={
        isOutline
          ? 'flex gap-2 items-center justify-center px-10 py-1 text-center text-black outline w-full rounded-sm cursor-pointer active:scale-101'
          : 'flex gap-2 items-center justify-center px-10 py-1 text-center bg-black text-white rounded-sm cursor-pointer active:scale-101'
      }
    >
      {icon}
      {text}
    </button>
  )
}

export default Button

 