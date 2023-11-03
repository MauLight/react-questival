import { ArrowLeft, ArrowRight, Quotes } from '@carbon/icons-react'
import { motion } from 'framer-motion'
import { fadeInSmall } from '../variants'
import { useState } from 'react'
import them from '../assets/Them.jpg'

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

// const placeholder = 'https://placehold.co/600x400?text=POSTER'

export const Project = () => {

  const [page, setPage] = useState(1)

  const [title, setTitle] = useState('Them')
  // eslint-disable-next-line no-unused-vars
  const [poster, setPoster] = useState(them)
  const [logline, setLogline] = useState('')
  const [summary, setSummary] = useState('')

  //THE CREATION OF A MYTH
  const [problem, setProblem] = useState('')
  const [take, setTake] = useState('')
  const [concept, setConcept] = useState('')
  const [myth, setMyth] = useState('')

  //THE DRAMATIC BASIS OF STORY
  const [theme, setTheme] = useState('')
  const [truth, setTruth] = useState('')
  const [contrapositive, setContrapositive] = useState('')
  const [lie, setLie] = useState('')
  const [flaw, setFlaw] = useState('')
  const [wound, setWound] = useState('')
  const [want, setWant] = useState('')
  const [antagonism, setAntagonism] = useState('')
  const [need, setNeed] = useState('')

  //THE PROTAGONIST'S ARC
  // eslint-disable-next-line no-unused-vars
  const [protagonist, setProtagonist] = useState('https://placehold.co/600x400?text=Protagonist')
  const [chLogline, setChLogline] = useState('')
  const [belief, setBelief] = useState('')
  const [falseBehavior, setFalseBehavior] = useState('')
  const [uncertainty, setUncertainty] = useState('')
  const [trueBehavior, setTrueBehavior] = useState('')
  const [rightAction, setRightAction] = useState('')
  const [trueCharacter, setTrueCharacter] = useState('')

  //OBJECTIVE & OPPOSITION
  const [objective, setObjective] = useState('')
  const [antagonismA, setAntagonismA] = useState('')
  const [sameObjective, setSameObjective] = useState('')
  const [distance, setDistance] = useState('')
  const [resolve, setResolve] = useState('')

  // eslint-disable-next-line no-unused-vars
  const handlePoster = (e) => {
    alert('HEY!')
  }

  return (
    <div className="w-screen flex flex-col h-screen bg-alien text-white text-2xl font-body overflow-y-hidden">
      <>
        {
          page === 1 && (
            <motion.div
              variants={fadeInSmall('left', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex flex-col justify-center items-center pt-6 gap-y-20'>
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
                        <textarea placeholder={lorem} type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl sm:text-4xl min-[1800px]:text-5xl w-[50vw]' value={logline} onChange={({ target }) => setLogline(target.value)} />
                      </div>
                    </div>
                    <div className="flex flex-col gap-x-5 gap-y-5 text-center font-body w-full items-start">
                      <label htmlFor='summary'>Summary_</label>
                      <textarea placeholder={lorem} id='summary' className='h-[23vh] font-body w-full text-[#aaaaaa] bg-transparent text-xl sm:text-2xl min-[1800px]:text-3xl' value={summary} onChange={({ target }) => setSummary(target.value)} />
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
              className='flex flex-col justify-center items-center pt-6 gap-y-20'>
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
                    <h1 className='font-body text-6xl text-white'>The creation of a Myth_</h1>
                    <div className="flex flex-col">
                      <label htmlFor='summary'>Problem_</label>
                      <input placeholder={lorem} type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl sm:text-2xl min-[1800px]:text-3xl w-[50vw]' value={problem} onChange={({ target }) => setProblem(target.value)} />
                    </div>
                    <div className="flex flex-col gap-x-5 gap-y-5 text-center font-body w-full items-start">
                      <label htmlFor='summary'>Your Take_</label>
                      <textarea placeholder={lorem} id='summary' className='h-[7vh] font-body w-full text-[#aaaaaa] bg-transparent text-xl sm:text-2xl min-[1800px]:text-3xl' value={take} onChange={({ target }) => setTake(target.value)} />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor='summary'>Concept_</label>
                      <input placeholder={lorem} type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl sm:text-2xl min-[1800px]:text-3xl w-[50vw]' value={concept} onChange={({ target }) => setConcept(target.value)} />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor='summary'>Myth_</label>
                      <input placeholder={lorem} type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl sm:text-2xl min-[1800px]:text-3xl w-[50vw]' value={myth} onChange={({ target }) => setMyth(target.value)} />
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
          page === 3 && (
            <motion.div
              variants={fadeInSmall('left', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex flex-col justify-center items-center pt-6 gap-y-20'>
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
                    <h1 className='font-body text-6xl text-white'>The dramatic basis of Story_</h1>
                    <div className="flex flex-col">
                      <label htmlFor='theme'>Theme_</label>
                      <input placeholder={lorem} id='theme' type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl sm:text-2xl min-[1800px]:text-3xl' value={theme} onChange={({ target }) => setTheme(target.value)} />
                    </div>
                    <div className="flex gap-x-20">
                      <div className="flex flex-col">
                        <div className="flex flex-col">
                          <label htmlFor='truth'>Truth_</label>
                          <input placeholder={lorem} id='truth' className='font-body text-[#aaaaaa] bg-transparent text-xl sm:text-2xl min-[1800px]:text-3xl' value={truth} onChange={({ target }) => setTruth(target.value)} />
                        </div>
                        <div className="flex flex-col">
                          <label htmlFor='contrapositive'>Contrapositive_</label>
                          <input placeholder={lorem} id='contrapositive' type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl sm:text-2xl min-[1800px]:text-3xl' value={contrapositive} onChange={({ target }) => setContrapositive(target.value)} />
                        </div>
                        <div className="flex flex-col">
                          <label htmlFor='lie'>Lie_</label>
                          <input placeholder={lorem} id='lie' type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl sm:text-2xl min-[1800px]:text-3xl' value={lie} onChange={({ target }) => setLie(target.value)} />
                        </div>
                        <div className="flex flex-col">
                          <label htmlFor='flaw'>Flaw_</label>
                          <input placeholder={lorem} id='flaw' type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl sm:text-2xl min-[1800px]:text-3xl' value={flaw} onChange={({ target }) => setFlaw(target.value)} />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex flex-col">
                          <label htmlFor='wound'>Sin/Wound</label>
                          <input placeholder={lorem} id='wound' type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl sm:text-2xl min-[1800px]:text-3xl' value={wound} onChange={({ target }) => setWound(target.value)} />
                        </div>
                        <div className="flex flex-col">
                          <label htmlFor='want'>Want_</label>
                          <input placeholder={lorem} id='want' className='font-body text-[#aaaaaa] bg-transparent text-xl sm:text-2xl min-[1800px]:text-3xl' value={want} onChange={({ target }) => setWant(target.value)} />
                        </div>
                        <div className="flex flex-col">
                          <label htmlFor='antagonism'>Antagonism_</label>
                          <input placeholder={lorem} id='antagonism' type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl sm:text-2xl min-[1800px]:text-3xl' value={antagonism} onChange={({ target }) => setAntagonism(target.value)} />
                        </div>
                        <div className="flex flex-col">
                          <label htmlFor='need'>Need_</label>
                          <input placeholder={lorem} id='need' type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl sm:text-2xl min-[1800px]:text-3xl' value={need} onChange={({ target }) => setNeed(target.value)} />
                        </div>
                      </div>
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
          page === 4 && (
            <motion.div
              variants={fadeInSmall('left', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex flex-col justify-center items-center pt-6 gap-y-20'>
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
                      <img src={protagonist} className={'w-full min-h-full object-cover'} />
                      <input
                        type="file"
                        name="upload-avatar"
                        onChange={(e) => handlePoster(e)}
                        className="w-0 h-0 p-0 m-0"
                      />
                    </label>
                  </div>

                  <div className="flex flex-col min-h-full justify-start items-start gap-y-5">
                    <h1 className='font-body text-6xl text-white'>{'The protagonist\'s Arc_'}</h1>
                    <div className="flex flex-col gap-y-5">
                      <div className="flex gap-x-10">
                        <div className="flex flex-col gap-y-2">
                          <label htmlFor='belief'>Character Logline_</label>
                          <textarea placeholder={lorem} id='belief' type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl sm:text-2xl min-[1800px]:text-3xl w-[28vw]' value={chLogline} onChange={({ target }) => setChLogline(target.value)} />
                          <div className="flex flex-col">
                            <label htmlFor='false_behavior'>False Behavior_</label>
                            <input placeholder={lorem} id='false_behavior' className='font-body text-[#aaaaaa] bg-transparent text-xl sm:text-2xl min-[1800px]:text-3xl' value={falseBehavior} onChange={({ target }) => setFalseBehavior(target.value)} />
                          </div>
                          <div className="flex flex-col">
                            <label htmlFor='uncertainty'>Uncertainty_</label>
                            <input placeholder={lorem} id='uncertainty' type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl sm:text-2xl min-[1800px]:text-3xl' value={uncertainty} onChange={({ target }) => setUncertainty(target.value)} />
                          </div>
                          <div className="flex flex-col">
                            <label htmlFor='want'>Want_</label>
                            <input placeholder={lorem} id='want' type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl sm:text-2xl min-[1800px]:text-3xl' value={want} onChange={({ target }) => setWant(target.value)} />
                          </div>
                        </div>
                        <div className="flex flex-col gap-y-2">
                          <label htmlFor='belief'>System of belief_</label>
                          <textarea placeholder={lorem} id='belief' type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl sm:text-2xl min-[1800px]:text-3xl w-[28vw]' value={belief} onChange={({ target }) => setBelief(target.value)} />

                          <div className="flex flex-col">
                            <label htmlFor='true_behavior'>True Behavior_</label>
                            <input placeholder={lorem} id='true_behavior' type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl sm:text-2xl min-[1800px]:text-3xl' value={trueBehavior} onChange={({ target }) => setTrueBehavior(target.value)} />
                          </div>
                          <div className="flex flex-col">
                            <label htmlFor='right_action'>Right Action_</label>
                            <input placeholder={lorem} id='right_action' className='font-body text-[#aaaaaa] bg-transparent text-xl sm:text-2xl min-[1800px]:text-3xl' value={rightAction} onChange={({ target }) => setRightAction(target.value)} />
                          </div>
                          <div className="flex flex-col">
                            <label htmlFor='true_character'>True Character_</label>
                            <input placeholder={lorem} id='true_character' type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl sm:text-2xl min-[1800px]:text-3xl' value={trueCharacter} onChange={({ target }) => setTrueCharacter(target.value)} />
                          </div>

                        </div>
                      </div>
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
          page === 5 && (
            <motion.div
              variants={fadeInSmall('left', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex flex-col justify-center items-center pt-6 gap-y-20'>
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
                    <h1 className='font-body text-6xl text-white'>Objective & Opposition_</h1>
                    <div className="flex flex-col">
                      <label htmlFor='objective'>Objective_</label>
                      <input placeholder={lorem} id='objective' type='text' className='font-body text-[#aaaaaa] w-[35vw] bg-transparent text-xl sm:text-2xl min-[1800px]:text-3xl' value={objective} onChange={({ target }) => setObjective(target.value)} />
                    </div>
                    <div className="flex flex-col gap-y-5 ">
                      <div className="flex gap-x-10">
                        <div className="flex flex-col">
                          <label htmlFor='antagonismA'>Antagonism by Antagonist_</label>
                          <input placeholder={lorem} id='antagonismA' className='font-body text-[#aaaaaa] bg-transparent text-xl sm:text-2xl min-[1800px]:text-3xl  w-[28vw]' value={antagonismA} onChange={({ target }) => setAntagonismA(target.value)} />
                        </div>
                        <div className="flex flex-col">
                          <label htmlFor='wound'>Antagonism by Allies_</label>
                          <input placeholder={lorem} id='wound' type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl sm:text-2xl min-[1800px]:text-3xl  w-[28vw]' value={wound} onChange={({ target }) => setWound(target.value)} />
                        </div>
                      </div>
                      <div className="flex gap-x-10">
                        <div className="flex flex-col">
                          <label htmlFor='sameObjective'>Same Objective_</label>
                          <input placeholder={lorem} id='sameObjective' type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl sm:text-2xl min-[1800px]:text-3xl  w-[28vw]' value={sameObjective} onChange={({ target }) => setSameObjective(target.value)} />
                        </div>
                        <div className="flex flex-col">
                          <label htmlFor='distance'>Distance from Objective_</label>
                          <input placeholder={lorem} id='distance' className='font-body text-[#aaaaaa] bg-transparent text-xl sm:text-2xl min-[1800px]:text-3xl  w-[28vw]' value={distance} onChange={({ target }) => setDistance(target.value)} />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor='resolve'>Test Resolve_</label>
                        <input placeholder={lorem} id='resolve' type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl sm:text-2xl min-[1800px]:text-3xl  w-[28vw]' value={resolve} onChange={({ target }) => setResolve(target.value)} />
                      </div>
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
          page === 6 && (
            <motion.div
              variants={fadeInSmall('left', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex flex-col justify-center items-center pt-6 gap-y-20'>
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

                    <div className="flex">
                      <iframe
                        className='rounded-[10px] h-[49.7vh]'
                        src={'https://drive.google.com/file/d/1TK_DnG7vnbrDx7J178_0jHNqZ8mTobKD/preview'}
                        width="1080"
                        height="443"
                        allow="autoplay"
                      ></iframe>
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
          page === 7 && (
            <motion.div
              variants={fadeInSmall('left', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex flex-col justify-center items-center pt-6 gap-y-20'>
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

                    <div className="flex">
                      <iframe
                        className='rounded-[10px] h-[49.7vh]'
                        src={'https://drive.google.com/file/d/1cFp5STS1cYfrtmnsgodWNES0gQMG91cH/preview'}
                        width="1080"
                        height="443"
                        allow="autoplay"
                      ></iframe>
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
        {
          page < 7 && (
            <ArrowRight onClick={() => setPage(page + 1)} className='hidden sm:flex text-black w-[150px] h-auto hover:text-[#aaaaaa] active:scale-105 transition-all duration-200' size={28} />
          )
        }
      </div>
    </div>
  )
}

{/* script.genres.map((genre, i) => (
      <div key={i} className="bg-gradient-to-r from-primary to-danger rounded-full px-2 sm:px-5">
        <p className='font-carbon text-white text-md sm:text-lg'>{genre}</p>
      </div>
    )) */}