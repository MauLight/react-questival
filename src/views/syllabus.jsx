import React, { useState } from 'react'
import { Accordion, AccordionItem } from '@nextui-org/react'
import { syllabusPage1 } from '../utils/syllabus'
import { DotMark, ArrowLeft, ArrowRight } from '@carbon/icons-react'
import { motion } from 'framer-motion'
import { fadeInSmall } from '../variants'

export const Syllabus = () => {

  const [currentPage, setCurrentPage] = useState(syllabusPage1.filter(elem => parseInt(elem.pos) < 8))
  const [title, setTitle] = useState('Month I')

  const firstPage = syllabusPage1.filter(elem => parseInt(elem.pos) < 8)
  const secondPage = syllabusPage1.filter(elem => parseInt(elem.pos) > 7 && parseInt(elem.pos) < 15)
  const thirdPage = syllabusPage1.filter(elem => parseInt(elem.pos) > 14)

  const handlePageUp = () => {
    if (currentPage[currentPage.length - 1].pos === '7') {
      setCurrentPage(secondPage)
      setTitle('Month II')
    }
    else if (currentPage[currentPage.length - 1].pos === '14') {
      setCurrentPage(thirdPage)
      setTitle('Month III')
    }
    console.log(currentPage)
  }

  const handlePageDown = () => {
    if (currentPage[currentPage.length - 1].pos === '14') {
      setCurrentPage(firstPage)
      setTitle('Month I')
    }
    else if (currentPage[currentPage.length - 1].pos === '20') {
      setCurrentPage(secondPage)
      setTitle('Month II')
    }
  }

  return (
    <div className="w-screen flex flex-col h-screen bg-[#2c262d] text-white text-2xl font-body overflow-y-hidden">
      <motion.div
        variants={fadeInSmall('left', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}>
        <h1 className='text-8xl font-title2 mb-32 mt-20 text-center'>{title}</h1>
        <div className="flex justify-center h-[50vh] items-start overflow-y-scroll">
          <div className="w-1/2">
            {
              currentPage.map(lesson => (
                <Accordion key={lesson.id} variant="splitted">
                  <AccordionItem key={lesson.pos} aria-label="Accordion 1" title={lesson.title}>
                    <ul className='text-lg mb-10'>
                      {
                        lesson.elements.map(item => (
                          <div key={item} className='flex items-center gap-x-2 px-5'>
                            <DotMark size={10} />
                            <li>{item}</li>
                          </div>
                        ))
                      }
                    </ul>
                  </AccordionItem>
                </Accordion>
              ))
            }
          </div>
        </div>
        <div className="flex justify-center items-end gap-x-5 mt-10">
          <button onClick={handlePageDown} className="flex justify-center items-center mt-10">
            <ArrowLeft size={32} />
          </button>
          <button onClick={handlePageUp} className="flex justify-center items-center mt-10">
            <ArrowRight size={32} />
          </button>
        </div>
      </motion.div>
    </div>
  )
}
