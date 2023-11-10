import hero from '../assets/hero.mp4'

export const Lesson = ({ lessons, lessonId }) => {

  const lessonFilter = lessons?.filter(blog => blog.id === lessonId)

  console.log(lessonFilter)

  return (
    <div className="flex w-screen h-screen pl-[190px] overflow-y-hidden">
      <div className="flex flex-col w-full border border-[#464648] overflow-y-scroll">
        <video
          src={hero}
          type='video/mp4'
          loop
          controls={false}
          muted
          autoPlay
          className="object-cover w-full min-h-[68.89vh] box-border overflow-hidden border-b border-[#464648]"
        />
        <div className='px-20 py-10 '>
          <p className='font-body text-xl text-white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
          </p>
        </div>
      </div>
      <div className="flex flex-col h-screen w-[13%] border-t border-[#464648] mt-10">
        <div className='text-2xl font-title2 text-white p-5 text-center border-b border-[#464648] uppercase glow'>Lessons</div>
        <div className="my-5 border-b border-[#464648] h-[55.2vh]">
          {
            lessonFilter[0].elements.map((elem, i) => (
              <ul className='pl-5' key={elem}>
                <li className='text-[#aaaaaa] text-sm hover:text-white transition-color duration-200 font-body my-5'>{`${i}. ${elem}`}</li>
              </ul>
            ))
          }
        </div>
      </div>
    </div>
  )
}
