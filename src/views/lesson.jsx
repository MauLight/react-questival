import hero from '../assets/video_lesson_1.mp4'

export const Lesson = ({ lessons, lessonId }) => {

  const lessonFilter = lessons?.filter(blog => blog.id === lessonId)

  console.log('This is the lesson', lessonFilter)

  return (
    <div className="flex w-full h-screen overflow-y-hidden">
      <div className="flex flex-col w-full overflow-y-scroll my-5">
        <video
          src={hero}
          type='video/mp4'
          loop
          controls={false}
          muted
          autoPlay
          className="object-cover w-screen lg:w-full min-h-[30vh] min-[400px]:min-h-[40vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[79.1vh] box-border overflow-hidden border border-[#464648]"
        />
        <div>
          <div className='px-2 sm:px-20 py-10 border-r border-[#464648]'>
            <p className='font-body text-xl text-white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
            </p>
          </div>
          <div className="lg:hidden flex flex-col w-full border-t border-[#464648] mt-5">
            <div className='text-2xl font-title2 text-white p-5 text-center border-b border-[#464648] uppercase glow'>Lessons</div>
            <div className="my-5 border-b border-[#464648] h-[55.3vh]">
              {
                lessonFilter[0]?.elements?.map((elem, i) => (
                  <ul className='pl-5' key={elem}>
                    <li className='text-[#aaaaaa] cursor-pointer text-sm hover:text-white transition-color duration-200 font-body my-5'>{`${i + 1}. ${elem}`}</li>
                  </ul>
                ))
              }
            </div>
          </div>
        </div>

      </div>
      <div className="hidden lg:flex flex-col h-screen w-[18%] border-t border-[#464648] mt-5">
        <div className='text-2xl font-title2 text-white p-5 text-center border-b border-[#464648] uppercase glow'>Lessons</div>
        <div className="my-5 border-b border-[#464648] h-[55.3vh]">
          {
            lessonFilter[0]?.elements?.map((elem, i) => (
              <ul className='pl-5' key={elem}>
                <li className='text-[#aaaaaa] cursor-pointer text-sm hover:text-white transition-color duration-200 font-body my-5'>{`${i + 1}. ${elem}`}</li>
              </ul>
            ))
          }
        </div>
      </div>
    </div>
  )
}
