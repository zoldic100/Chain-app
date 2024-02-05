import React  from 'react'

const Button = ({ children }) => {
  return (
    <button type="button " className='flex items-center justify-center gap-4 lg:text-lg text-xs font-semibold text-white bg-[#4b8ef1] rounded-full w-fit px-5 py-3'>
        {children}
    </button>
  )
}

export default Button