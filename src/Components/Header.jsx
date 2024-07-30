import React from 'react'
import Toolbar from './Toolbar'

const Header = () => {
  return (
    <>
    <div className='w-screen h-20 md:h-24 lg:h-28 xl:h-36 text-white bg-[#305196] flex flex-col justify-center items-center gap-2'>
        <h1 className=' text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl'>React MS WORD Clone</h1>
        <h3 className='text-base text-slate-200'>By Ishfaque Ahmed</h3>
    </div>

    <Toolbar/>
    </>
  )
}

export default Header