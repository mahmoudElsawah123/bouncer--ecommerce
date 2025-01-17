import React from 'react'
import { Spinner } from "flowbite-react";

const Loading = () => {
  return (
    <div className='w-full flex justify-center items-center h-[200px]'>
      <Spinner size='xl' color="purple" aria-label="Purple spinner example" />
    </div>
  )
}

export default Loading
