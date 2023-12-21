import React from 'react'

export const ScreenplayCard = ({ project }) => {
  return (
    <div className="flex bg-[#0b1014] h-[40vh] sm:h-full lg:h-[60vh] min-w-[100vw] lg:min-w-[65vw] mb-0 overflow-hidden border-r border-[#464648]">
      <div className='h-full w-auto'>
        <img src={project.poster} className='min-w-[25vw] lg:min-w-[20vw] h-[50vh] sm:h-[50vh] lg:h-full object-cover' />
      </div>
      <div className='flex flex-col justify-between gap-y-[5%] sm:gap-y-[10%] p-5 w-1/2 sm:w-full'>
        <div className="flex justify-end">
          <p className='border border-white px-4 py-2 text-white rounded-md font-body text-[8px] sm:text-md'>Ranking</p>
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="flex justify-center gap-x-2">
            {
              project.genres.map(elem => <p key={elem} className='border border-white py-0 sm:py-1 px-1 sm:px-3 text-[6px] sm:text-[10px] text-white rounded-full font-body'>{elem}</p>)
            }
          </div>
          <h1 className='w-[40vw] text-md sm:text-4xl font-body text-white uppercase truncate'>{project.title}</h1>
          <p className='text-[8px] sm:text-lg font-body text-white line-clamp-3'>{project.logline}</p>
        </div>
        <div className="flex justify-end">
          <button className='h-12 w-full sm:w-[20vw] lg:w-[10vw] p-2 text-white bg-[#FC4ECF] border border-[#FC4ECF] rounded-md hover:bg-[#0b1014] hover:text-[#FC4ECF] active:bg-[#FC4ECF] active:text-white transition-color duration-200' >
                            Read now
          </button>
        </div>
      </div>

    </div>
  )
}
