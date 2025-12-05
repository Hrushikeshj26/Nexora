import React from 'react'
import Card from './Card'

function Discover() {
  return (
    <div className='w-full my-20 flex flex-col gap-15 justify-center items-center'>
        <h2 className='text-4xl font-bold underline'>Discover NEW Models</h2>
        <div className='flex gap-8 justify-center items-center flex-wrap'>
          <Card/>
        </div>
    </div>
  )
}

export default Discover