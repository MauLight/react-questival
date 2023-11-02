import { ArrowLeft, ArrowRight, Quotes } from '@carbon/icons-react'
import { motion } from 'framer-motion'
import { fadeInSmall } from '../variants'
import { useState } from 'react'

export const Project = () => {

  const [page, setPage] = useState(1)

  const [title, setTitle] = useState('Son of Man')
  const [poster, setPoster] = useState('https://placehold.co/600x400?text=POSTER')
  const [logline, setLogline] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
  const [summary, setSummary] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')

  const handlePoster = (e) => {
    alert('HEY!')
  }

  return (
    <div className="w-screen flex flex-col h-screen bg-[#2c262d] text-white text-2xl font-body overflow-y-hidden">
      <>
        {
          page === 1 && (
            <motion.div
              variants={fadeInSmall('left', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex flex-col justify-center items-center py-10 gap-y-20'>
              <div className="mr-auto pl-[250px]">

                <div className="flex flex-col justify-center">
                  <input className='font-title2 text-5xl w-full sm:text-[108px] bg-transparent' type='text' value={title} onChange={({ target }) => setTitle(target.value)} />
                  <div className="flex justify-between">
                    <div className="flex w-[80%] border-b-4 border-transparent mb-[7px]"></div>
                    <div className="hidden xl:flex justify-end items-end gap-x-2 pr-[7%]">
                      <p className='font-body text-black text-sm'>{'DATE'}</p>

                      <p className='font-body text-white bg-gradient-to-r from-primary to-danger text-sm rounded-full px-2'>{'GENRE'}</p>

                    </div>
                  </div>
                </div>

              </div>
              <div className="w-full pl-[250px]">
                <div className="lg:flex gap-x-20">
                  <div className={'lg:w-[20vw] lg:h-[50vh] object-left rounded-[10px] group relative overflow-hidden'}>

                    <label>
                      <img src={poster} className={'w-full min-h-full object-cover'} />
                      <input
                        type="file"
                        name="upload-avatar"
                        onChange={(e) => handlePoster(e)}
                        className="w-0 h-0 p-0 m-0"
                      />
                    </label>
                  </div>

                  <div className="flex flex-col min-h-full justify-start items-start gap-y-5">
                    <div className="flex flex-col">
                      <label htmlFor='summary'>Logline_</label>
                      <div className="flex gap-x-5 text-center items-center">
                        <Quotes className='hidden sm:flex text-black w-[150px] h-auto' size={28} />
                        <textarea type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl sm:text-4xl min-[1800px]:text-5xl w-[50vw]' value={logline} onChange={({ target }) => setLogline(target.value)} />
                      </div>
                    </div>
                    <div className="flex flex-col gap-x-5 gap-y-5 text-center font-body w-full items-start">
                      <label htmlFor='summary'>Summary_</label>
                      <textarea id='summary' className='h-[29vh] font-body w-full text-[#aaaaaa] bg-transparent text-xl sm:text-2xl min-[1800px]:text-3xl' value={summary} onChange={({ target }) => setSummary(target.value)} />
                    </div>

                  </div>

                </div>
              </div>
            </motion.div>
          )
        }
      </>
      <>
        {
          page === 2 && (
            <motion.div
              variants={fadeInSmall('left', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex flex-col justify-center items-center py-10 gap-y-20'>
              <div className="mr-auto pl-[250px]">

                <div className="flex flex-col justify-center">
                  <input className='font-title2 text-5xl w-full sm:text-[108px] bg-transparent' type='text' value={title} onChange={({ target }) => setTitle(target.value)} />
                  <div className="flex justify-between">
                    <div className="flex w-[80%] border-b-4 border-transparent mb-[7px]"></div>
                    <div className="hidden xl:flex justify-end items-end gap-x-2 pr-[7%]">
                      <p className='font-body text-black text-sm'>{'DATE'}</p>

                      <p className='font-body text-white bg-gradient-to-r from-primary to-danger text-sm rounded-full px-2'>{'GENRE'}</p>

                    </div>
                  </div>
                </div>

              </div>
              <div className="w-full pl-[250px]">
                <div className="lg:flex gap-x-20">
                  <div className={'lg:w-[20vw] lg:h-[50vh] object-left rounded-[10px] group relative overflow-hidden'}>

                    <label>
                      <img src={poster} className={'w-full min-h-full object-cover'} />
                      <input
                        type="file"
                        name="upload-avatar"
                        onChange={(e) => handlePoster(e)}
                        className="w-0 h-0 p-0 m-0"
                      />
                    </label>
                  </div>

                  <div className="flex flex-col min-h-full justify-start items-start gap-y-5">
                    <div className="flex flex-col">
                      <label htmlFor='summary'>Logline_</label>
                      <div className="flex gap-x-5 text-center items-center">
                        <Quotes className='hidden sm:flex text-black w-[150px] h-auto' size={28} />
                        <textarea type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl sm:text-4xl min-[1800px]:text-5xl w-[50vw]' value={logline} onChange={({ target }) => setLogline(target.value)} />
                      </div>
                    </div>
                    <div className="flex flex-col gap-x-5 gap-y-5 text-center font-body w-full items-start">
                      <label htmlFor='summary'>Summary_</label>
                      <textarea id='summary' className='h-[29vh] font-body w-full text-[#aaaaaa] bg-transparent text-xl sm:text-2xl min-[1800px]:text-3xl' value={summary} onChange={({ target }) => setSummary(target.value)} />
                    </div>

                  </div>

                </div>
              </div>
            </motion.div>
          )
        }
      </>
      <div className="flex gap-x-10 ml-auto pr-20">
        {
          page > 1 && (
            <ArrowLeft onClick={() => setPage(page - 1)} className='hidden sm:flex text-black w-[150px] h-auto hover:text-[#aaaaaa] active:scale-105 transition-all duration-200' size={28} />
          )
        }
        <ArrowRight onClick={() => setPage(page + 1)} className='hidden sm:flex text-black w-[150px] h-auto hover:text-[#aaaaaa] active:scale-105 transition-all duration-200' size={28} />
      </div>
    </div>
  )
}



{/* script.genres.map((genre, i) => (
      <div key={i} className="bg-gradient-to-r from-primary to-danger rounded-full px-2 sm:px-5">
        <p className='font-carbon text-white text-md sm:text-lg'>{genre}</p>
      </div>
    )) */}