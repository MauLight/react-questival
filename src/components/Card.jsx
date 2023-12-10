

export const Card = ({ id, title, lesson, img, body, tags }) => {


  return (
    <div
      key={id}
      className='w-screen lg:w-[45vw] h-full object-contain object-center overflow-hidden border-r border-[#464648] bg-[#1b1b1b] py-10'
      style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}
    >
      <h1 className='font-body text-lg mb-1 text-[#aaaaaa] uppercase px-5'>{'// Lesson ' + lesson}</h1>
      <h1 className='font-title2 text-xl sm:text-[40px] mb-5  text-white px-5 uppercase'>{title}</h1>
      <img className='h-[60%] lg:h-[40%] xl:h-[50%] w-full object-cover mx-auto border-y border-[#464648]' src={img} />
      <div className="hidden min-[400px]:flex lg:hidden xl:flex justify-center my-3">
        {
          tags.map((tag, i) => (
            <div key={i} className="border-2 rounded-full px-2 py-1 my-3 mx-1 border-[#aaaaaa]">
              <p className='text-[10px] text-white'>{tag}</p>
            </div>
          )
          )
        }
      </div>
      <div className="flex px-5 border-t py-5 border-[#464648]">
        <p className='text-lg sm:text-xl font-body text-white'>{body}</p>
      </div>
    </div>
  )
}
