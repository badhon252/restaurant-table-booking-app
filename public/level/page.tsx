"use client"
import Link from "next/link"
import { useState } from "react"

interface Level{
  level: string
  value: string
}

export default function Level() {
  const [level, setLevel] = useState()
  function handleClick(e: any){
    setLevel(e.target.id)
  }
  console.log(level);
  return (
    <div className='min-h-screen flex flex-col items-center  justify-between bg-slate-800 text-white'>
        <h1 className='text-5xl font-extrabold my-10'>Select Difficulty Level! </h1>

        <div className="btns flex flex-col">
        <Link id="Easy" onClick={handleClick} href="/" type='button' className='my-2 py-2 px-10 text-2xl font-bold bg-slate-600 rounded hover:bg-green-600'>Easy</Link>
        <Link id="Medium"onClick={handleClick} href="/" type='button' className='my-2 py-2 px-10 text-2xl font-bold bg-slate-600 rounded hover:bg-yellow-600'>Medium</Link>
        <Link id="Hard"onClick={handleClick} href="/" type='button' className='my-2 py-2 px-10 text-2xl font-bold bg-slate-600 rounded hover:bg-orange-600'>Hard</Link>
        <Link id="Extra_Hard"onClick={handleClick} href="/" type='button' className='my-2 py-2 px-10 text-2xl font-bold bg-slate-600 rounded hover:bg-red-600'>Extra Hard</Link>
        </div>

        <Link id="custom" onClick={handleClick} href="/" type='button' className='my-20 py-2 px-10 text-2xl font-bold bg-slate-600 rounded hover:bg-blue-600'>Create your own puzzles.</Link>
    </div>
  )
}
