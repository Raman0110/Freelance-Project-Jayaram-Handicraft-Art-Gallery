import React from 'react'

const Loading = ({ type }) => {
  switch (type) {
    case "product":
      return (
        <>
          <div className='ProductCard shadow-md rounded-lg'>
            <div className='animate-pulse'>
              <div className="productCardImg rounded-md bg-slate-500 w-[90%] mx-auto h-[250px] pt-3 relative overflow-hidden md:h-[320px]">
              </div>
              <div className="productCardDetail px-4 pb-4">
                <div className="h-4 w-full bg-slate-500 mt-2 rounded-full">
                </div>
                <div className="h-4 w-1/2 bg-slate-500 mt-2 rounded-full">
                </div>
              </div>
            </div>
          </div>
        </>
      );
      break;
    case "category":
      return (
        <>
          <div className='categoryCard animate-pulse '>
            <div className="categoryCardImg rounded-full w-[130px] h-[130px] mx-auto mt-4 bg-slate-600">
            </div>
            <div className='bg-slate-600 w-[50%] h-4 rounded-full mt-2 mx-auto'></div>
          </div>
        </>
      );
      break;
    case "slider":
      return (
        <>
          <div className="md:h-[78vh] animate-pulse bg-slate-600">
          </div>
        </>
      );
      break;
  }
}

export default Loading