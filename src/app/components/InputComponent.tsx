import React from 'react'

const InputComponent = ({setValue}: {setValue: Function}) =>  {
  return (
    <>
      <div className="w-full px-4 pt-2 mt-24">
        <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-5 h-4-11 text-center">
          <input 
            type="text"
            placeholder="Enter text here"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
    </>
  )
}

export default InputComponent