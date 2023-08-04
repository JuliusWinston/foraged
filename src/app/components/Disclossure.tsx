import React from 'react';

const Disclosures = ({value}: {value: number}) => {
  return (
    <>
      <div className="w-full px-4 pt-16 mt-24">
        <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-8 h-4-11 text-center">
          <h3 className="text-black text-xl">Longest even or odd streak: {value}</h3>
        </div>
      </div>
    </>
  )
}

export default Disclosures