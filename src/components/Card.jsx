

export const Card = ({ id, title, lesson, img, body, tags }) => {


  return (
    <div
      key={id}
      className='lg:min-w-[35vw] h-full object-contain object-center overflow-hidden border-x border-[#464648] bg-[#1b1b1b] py-10'
      style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}
    >
      <h1 className='font-body text-lg mb-1 text-[#aaaaaa] uppercase px-5'>{'// Lesson ' + lesson}</h1>
      <h1 className='font-title2 text-[40px] py-2 border-t border-[#464648] text-white px-5 uppercase'>{title}</h1>
      <img className='md:h-[60%] lg:h-[40%] xl:h-[50%] w-full object-cover mx-auto border-y border-[#464648]' src={img} />
      <div className="flex justify-center my-3">
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
        <p className='text-xl font-body text-white'>{body}</p>
      </div>
    </div>
  )
}
