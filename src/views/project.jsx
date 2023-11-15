import { ArrowLeft, ArrowRight, Quotes } from '@carbon/icons-react'
import { motion } from 'framer-motion'
import { fadeInSmall } from '../variants'
import { useState } from 'react'
import projectsService from '../services/projects'
import { getUser } from '../services/user'
import { useEffect } from 'react'
import axios from 'axios'

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

const placeholder = 'https://i.postimg.cc/DydzwSZW/Them.jpg'

export const Project = ({ user, setError }) => {

  const [page, setPage] = useState(1)
  const [currentUser, setCurrentUser] = useState(null)

  const [title, setTitle] = useState('')
  const [genre, setGenre] = useState([])
  const [rating, setRating] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [poster, setPoster] = useState(placeholder)
  const [logline, setLogline] = useState('')
  const [summary, setSummary] = useState('')

  //THE CREATION OF A MYTH
  const [problem, setProblem] = useState('')
  const [take, setTake] = useState('')
  const [concept, setConcept] = useState('')
  const [myth_u, setMyth_u] = useState('')

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
  const [protagonist_u, setProtagonist_u] = useState('')
  const [chLogline, setChLogline] = useState('')
  const [belief, setBelief] = useState('')
  const [falseBehavior, setFalseBehavior] = useState('')
  const [uncertainty, setUncertainty] = useState('')
  const [trueBehavior, setTrueBehavior] = useState('')
  const [rightAction, setRightAction] = useState('')
  const [trueCharacter, setTrueCharacter] = useState('')

  //OBJECTIVE & OPPOSITION
  const [objective, setObjective] = useState('')
  const [antagonismAnt, setAntagonismAnt] = useState('')
  const [antagonismAll, setAntagonismAll] = useState('')
  const [sameObjective, setSameObjective] = useState('')
  const [distance, setDistance] = useState('')
  const [resolve, setResolve] = useState('')

  //*UPLOADED FILES
  const [screenplay, setScreenplay] = useState('')
  const [pitch, setPitch] = useState('')
  const [wallpaper, setWallpaper] = useState('')

  // eslint-disable-next-line no-unused-vars
  const handlePoster = (e) => {

    e.preventDefault()

    const formData = new FormData()
    formData.append('file', e.target.files[0])
    formData.append('upload_preset', 'xksqk2bc')

    axios.post(
      'https://api.cloudinary.com/v1_1/maulight/image/upload',
      formData
    )
      .then((response) => {
        console.log(response)
        setPoster(response.data.secure_url)
        handleSave(response.data.secure_url)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleSave = (imageUrl) => {

    if (title === '' || logline === '' || summary === '') {
      setError('You didn\'t write anything!')
      setTimeout(() => setError(null), 5000)
      return -1
    }

    const myth = {
      problem,
      take,
      concept,
      myth_u
    }

    const basis = {
      theme,
      truth,
      contrapositive,
      lie,
      flaw,
      wound,
      want,
      antagonism,
      need
    }

    const protagonist = {
      protagonist_u,
      chLogline,
      belief,
      falseBehavior,
      uncertainty,
      trueBehavior,
      rightAction,
      trueCharacter
    }

    const opposition = {
      objective,
      antagonismAnt,
      antagonismAll,
      sameObjective,
      distance,
      resolve
    }

    let posterUrl = imageUrl || poster

    const project = {
      title,
      logline,
      genre,
      rating,
      summary,
      myth,
      basis,
      protagonist,
      opposition,
      screenplay,
      pitch,
      poster: posterUrl,
      wallpaper
    }

    if (currentUser) {
      const id = currentUser.projects[0]._id
      projectsService.update(id, project).then(response => {
        console.log(response)
        setError('Project updated!', 'green')
        setTimeout(() => setError(null), 5000)
      })
    }
    else {
      projectsService.create(project).then(response => {
        console.log(response)
        setError('Project saved!', 'green')
        setTimeout(() => setError(null), 5000)
      })
    }
  }

  useEffect(() => {
    getUser(user.id).then(response => {

      if (response) {
        console.log(response)
        setCurrentUser(response)
        setTitle(response.projects[0].title)
        setLogline(response.projects[0].logline)
        setGenre(response.projects[0].genre)
        setRating(response.projects[0].rating)
        setSummary(response.projects[0].summary)
        setProblem(response.projects[0].myth.problem)
        setTake(response.projects[0].myth.take)
        setConcept(response.projects[0].myth.concept)
        setMyth_u(response.projects[0].myth.myth_u)
        setTheme(response.projects[0].basis.theme)
        setTruth(response.projects[0].basis.truth)
        setContrapositive(response.projects[0].basis.contrapositive)
        setLie(response.projects[0].basis.lie)
        setFlaw(response.projects[0].basis.flaw)
        setWound(response.projects[0].basis.wound)
        setWant(response.projects[0].basis.want)
        setAntagonism(response.projects[0].basis.antagonism)
        setNeed(response.projects[0].basis.need)
        setProtagonist_u(response.projects[0].protagonist.protagonist_u)
        setChLogline(response.projects[0].protagonist.chLogline)
        setBelief(response.projects[0].protagonist.belief)
        setFalseBehavior(response.projects[0].protagonist.falseBehavior)
        setUncertainty(response.projects[0].protagonist.uncertainty)
        setTrueBehavior(response.projects[0].protagonist.trueBehavior)
        setRightAction(response.projects[0].protagonist.rightAction)
        setTrueCharacter(response.projects[0].protagonist.trueCharacter)
        setObjective(response.projects[0].opposition.objective)
        setAntagonismAnt(response.projects[0].protagonist.antagonismAnt)
        setAntagonismAll(response.projects[0].protagonist.antagonismAll)
        setSameObjective(response.projects[0].protagonist.sameObjective)
        setDistance(response.projects[0].protagonist.distance)
        setResolve(response.projects[0].protagonist.resolve)
        setScreenplay(response.projects[0].screenplay)
        setPitch(response.projects[0].pitch)
        setPoster(response.projects[0].poster)
        setWallpaper(response.projects[0].wallpaper)
      }
    }
    )
  }, [])

  const PosterFrame = ({ poster }) => {
    return (
      <div className={'lg:w-[25vw] w-screen min-h-screen group relative lg:border-r border-[#464648] overflow-hidden'}>

        <label>
          <img src={poster} className={'w-screen h-full min-h-screen object-cover object-top'} />
          <input
            type="file"
            name="upload-poster"
            onChange={(e) => handlePoster(e)}
            className="w-0 h-0 p-0 m-0"
          />
        </label>
      </div>
    )
  }

  const LowerButtons = ({ handleSave, setPage }) => {
    return (
      <div className="flex justify-between w-full lg:gap-x-10 lg:pr-32">
        <motion.button
          onClick={handleSave}
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          className='font-body text-[12px] border border-[#464648] p-2 lg:p-4 rounded-full w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] bg-[#10100e] text-white hover:bg-white hover:text-[#3b1950] active:bg-[#10100e] active:text-white font-body my-auto'
        >Save</motion.button>
        <div className="flex">
          {
            page > 1 && (
              <ArrowLeft onClick={() => setPage(page - 1)} className='flex text-black w-[90px] lg:w-[150px] h-auto hover:text-[#aaaaaa] active:scale-105 transition-all duration-200' size={28} />
            )
          }
          {
            page < 7 && (
              <ArrowRight onClick={() => setPage(page + 1)} className='flex text-black w-[90px] lg:w-[150px] h-auto hover:text-[#aaaaaa] active:scale-105 transition-all duration-200' size={28} />
            )
          }
        </div>
      </div>
    )
  }

  const Title = ({ title, setTitle }) => {
    return (
      <div className="mr-auto lg:pl-[190px]">

        <div className="flex flex-col justify-center overflow-hidden">
          <input className='font-title2 text-lg min-[350px]:text-2xl lg:text-6xl w-screen border-b border-[#464648] py-2 pl-[3%] min-[1700px]:text-[96px] bg-transparent' placeholder='Title' type='text' value={title} onChange={({ target }) => setTitle(target.value)} />
        </div>

      </div>
    )
  }

  const Date = () => {
    return (
      <div className="flex justify-end items-center w-full py-2">
        <div className="flex justify-end gap-x-2  px-20">
          <p className='font-body text-[#464648] text-sm'>{'DATE'}</p>

          <p className='font-body text-white bg-gradient-to-r from-primary to-danger text-sm rounded-full px-2'>{'GENRE'}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-screen flex flex-col h-screen bg-[#10100e] text-white text-2xl font-body overflow-hidden pt-5 max-lg:mt-10">
      <>
        {
          page === 1 && (
            <motion.div
              variants={fadeInSmall('left', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex flex-col justify-center max-lg:min-h-screen items-center pt-5 max-lg:overflow-y-scroll'>
              <Title title={title} setTitle={setTitle} />
              <div className="poster w-full lg:pl-[190px]">
                <div className="flex  w-screen border-b border-[#464648]">
                  <div className="hidden lg:flex">
                    <PosterFrame poster={poster} />
                  </div>

                  <div className="flex flex-col min-h-full w-full justify-start items-start">
                    <Date />
                    <div className="lg:hidden">
                      <PosterFrame poster={poster} />
                    </div>
                    <div className="flex flex-col border-t border-[#464648] max-lg:justify-center max-lg:items-start px-2 lg:px-20 w-full py-2">
                      <label htmlFor='summary'>Logline_</label>
                      <div className="flex gap-x-5 text-center items-center h-[14vh] overflow-hidden">
                        <Quotes className='hidden min-[1700px]:flex text-black w-[125px] h-auto' size={28} />
                        <textarea placeholder={lorem} type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl min-[1700px]:text-3xl min-[1800px]:text4xl w-screen lg:w-[50vw]' value={logline} onChange={({ target }) => setLogline(target.value)} />
                      </div>
                    </div>
                    <div className="flex flex-col gap-x-5 gap-y-5 text-center font-body max-lg:justify-center max-lg:items-start px-2 lg:px-20 w-full items-start border-y border-[#464648]  py-3">
                      <label htmlFor='summary'>Summary_</label>
                      <textarea placeholder={lorem} id='summary' className='h-[21vh] font-body w-full text-[#aaaaaa] bg-transparent text-xl sm:text-xl min-[1800px]:text-2xl lg:pr-32' value={summary} onChange={({ target }) => setSummary(target.value)} />
                    </div>

                    <div className="px-2 lg:px-20 w-full">
                      <LowerButtons handleSave={handleSave} setPage={setPage} />
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
              className='flex flex-col justify-center max-lg:min-h-screen items-center pt-5 max-lg:overflow-y-scroll'>
              <Title title={title} setTitle={setTitle} />
              <div className="poster w-full lg:pl-[190px]">
                <div className="lg:flex border-b border-[#464648]">

                  <PosterFrame poster={poster} />

                  <div className="flex flex-col w-full min-h-full justify-start items-start gap-y-3">
                    <h1 className='font-body w-full text-4xl text-white py-5 border-b border-[#464648] px-2 lg:px-20'>The creation of a Myth_</h1>
                    <div className="flex flex-col px-2 lg:px-20 py-4">
                      <label htmlFor='summary'>Problem_</label>
                      <input placeholder={lorem} type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl min-[1800px]:text-2xl w-[50vw]' value={problem} onChange={({ target }) => setProblem(target.value)} />
                    </div>
                    <div className="flex flex-col gap-x-5 gap-y-5 text-center font-body w-full items-start px-2 lg:px-20">
                      <label htmlFor='summary'>Your Take_</label>
                      <textarea placeholder={lorem} id='summary' className='h-[7vh] font-body w-full text-[#aaaaaa] bg-transparent text-xl min-[1800px]:text-2xl' value={take} onChange={({ target }) => setTake(target.value)} />
                    </div>
                    <div className="flex flex-col px-2 lg:px-20">
                      <label htmlFor='summary'>Concept_</label>
                      <input placeholder={lorem} type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl min-[1800px]:text-2xl w-[50vw]' value={concept} onChange={({ target }) => setConcept(target.value)} />
                    </div>
                    <div className="flex flex-col px-2 lg:px-20">
                      <label htmlFor='summary'>Myth_</label>
                      <input placeholder={lorem} type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl min-[1800px]:text-2xl w-[50vw]' value={myth_u} onChange={({ target }) => setMyth_u(target.value)} />
                    </div>
                    <div className="px-2 lg:px-20 w-full border-t border-[#464648]">
                      <LowerButtons handleSave={handleSave} setPage={setPage} />
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
              className='flex flex-col justify-center max-lg:min-h-screen items-center pt-5 max-lg:overflow-y-scroll'>
              <div className="lg:pl-[190px] border-t border-[#464648]">

                <Title title={title} setTitle={setTitle} />

              </div>
              <div className="poster w-full lg:pl-[190px]">
                <div className="lg:flex border-b border-[#464648]">

                  <PosterFrame poster={poster} />

                  <div className="flex flex-col w-full min-h-full justify-start items-start gap-y-3">
                    <h1 className='font-body w-full text-4xl text-white py-5 border-b border-[#464648] px-2 lg:px-20'>The dramatic basis of Story_</h1>
                    <div className="flex flex-col px-2 lg:px-20 py-4">
                      <label htmlFor='theme'>Theme_</label>
                      <input placeholder={lorem} id='theme' type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl min-[1800px]:text-2xl min-[1800px]:text-3xl' value={theme} onChange={({ target }) => setTheme(target.value)} />
                    </div>
                    <div className="flex max-sm:flex-col gap-x-20">
                      <div className="flex flex-col">
                        <div className="flex flex-col px-2 lg:px-20">
                          <label htmlFor='truth'>Truth_</label>
                          <input placeholder={lorem} id='truth' className='font-body text-[#aaaaaa] bg-transparent text-xl min-[1800px]:text-2xl min-[1800px]:text-3xl' value={truth} onChange={({ target }) => setTruth(target.value)} />
                        </div>
                        <div className="flex flex-col px-2 lg:px-20">
                          <label htmlFor='contrapositive'>Contrapositive_</label>
                          <input placeholder={lorem} id='contrapositive' type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl min-[1800px]:text-2xl min-[1800px]:text-3xl' value={contrapositive} onChange={({ target }) => setContrapositive(target.value)} />
                        </div>
                        <div className="flex flex-col px-2 lg:px-20">
                          <label htmlFor='lie'>Lie_</label>
                          <input placeholder={lorem} id='lie' type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl min-[1800px]:text-2xl min-[1800px]:text-3xl' value={lie} onChange={({ target }) => setLie(target.value)} />
                        </div>
                        <div className="flex flex-col px-2 lg:px-20">
                          <label htmlFor='flaw'>Flaw_</label>
                          <input placeholder={lorem} id='flaw' type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl min-[1800px]:text-2xl min-[1800px]:text-3xl' value={flaw} onChange={({ target }) => setFlaw(target.value)} />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex flex-col max-sm:px-2">
                          <label htmlFor='wound'>Sin/Wound</label>
                          <input placeholder={lorem} id='wound' type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl min-[1800px]:text-2xl min-[1800px]:text-3xl' value={wound} onChange={({ target }) => setWound(target.value)} />
                        </div>
                        <div className="flex flex-col max-sm:px-2">
                          <label htmlFor='want'>Want_</label>
                          <input placeholder={lorem} id='want' className='font-body text-[#aaaaaa] bg-transparent text-xl min-[1800px]:text-2xl min-[1800px]:text-3xl' value={want} onChange={({ target }) => setWant(target.value)} />
                        </div>
                        <div className="flex flex-col max-sm:px-2">
                          <label htmlFor='antagonism'>Antagonism_</label>
                          <input placeholder={lorem} id='antagonism' type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl min-[1800px]:text-2xl min-[1800px]:text-3xl' value={antagonism} onChange={({ target }) => setAntagonism(target.value)} />
                        </div>
                        <div className="flex flex-col max-sm:px-2">
                          <label htmlFor='need'>Need_</label>
                          <input placeholder={lorem} id='need' type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl min-[1800px]:text-2xl min-[1800px]:text-3xl' value={need} onChange={({ target }) => setNeed(target.value)} />
                        </div>
                      </div>


                    </div>
                    <div className="px-2 sm:px-20 w-full border-t border-[#464648]">
                      <LowerButtons handleSave={handleSave} setPage={setPage} />
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
              className='flex flex-col justify-center max-lg:min-h-screen items-center pt-5 max-lg:overflow-y-scroll'>
              <div className="lg:pl-[190px] border-t border-[#464648]">

                <Title title={title} setTitle={setTitle} />

              </div>
              <div className="poster w-full lg:pl-[190px]">
                <div className="lg:flex border-b border-[#464648]">

                  <PosterFrame poster={poster} />

                  <div className="flex flex-col w-full min-h-full justify-start items-start gap-y-5">
                    <h1 className='font-body w-full text-4xl text-white py-5 border-b border-[#464648] px-2 lg:px-20'>{'The protagonist\'s Arc_'}</h1>
                    <div className="flex flex-col gap-y-2 py-2">
                      <div className="flex max-sm:flex-col gap-x-20">
                        <div className="flex flex-col gap-y-2 pl-2 sm:pl-20">
                          <label htmlFor='belief'>Character Logline_</label>
                          <textarea placeholder={lorem} id='belief' type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl min-[1800px]:text-2xl min-[1800px]:text-3xl w-[28vw]' value={chLogline} onChange={({ target }) => setChLogline(target.value)} />
                          <div className="flex flex-col">
                            <label htmlFor='false_behavior'>False Behavior_</label>
                            <input placeholder={lorem} id='false_behavior' className='font-body text-[#aaaaaa] bg-transparent text-xl min-[1800px]:text-2xl min-[1800px]:text-3xl' value={falseBehavior} onChange={({ target }) => setFalseBehavior(target.value)} />
                          </div>
                          <div className="flex flex-col">
                            <label htmlFor='uncertainty'>Uncertainty_</label>
                            <input placeholder={lorem} id='uncertainty' type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl min-[1800px]:text-2xl min-[1800px]:text-3xl' value={uncertainty} onChange={({ target }) => setUncertainty(target.value)} />
                          </div>
                          <div className="flex flex-col">
                            <label htmlFor='want'>Want_</label>
                            <input placeholder={lorem} id='want' type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl min-[1800px]:text-2xl min-[1800px]:text-3xl' value={want} onChange={({ target }) => setWant(target.value)} />
                          </div>
                        </div>
                        <div className="flex flex-col gap-y-2 pl-2 sm:pl-20">
                          <label htmlFor='belief'>System of belief_</label>
                          <textarea placeholder={lorem} id='belief' type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl min-[1800px]:text-2xl min-[1800px]:text-3xl w-[28vw]' value={belief} onChange={({ target }) => setBelief(target.value)} />

                          <div className="flex flex-col">
                            <label htmlFor='true_behavior'>True Behavior_</label>
                            <input placeholder={lorem} id='true_behavior' type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl min-[1800px]:text-2xl min-[1800px]:text-3xl' value={trueBehavior} onChange={({ target }) => setTrueBehavior(target.value)} />
                          </div>
                          <div className="flex flex-col">
                            <label htmlFor='right_action'>Right Action_</label>
                            <input placeholder={lorem} id='right_action' className='font-body text-[#aaaaaa] bg-transparent text-xl min-[1800px]:text-2xl min-[1800px]:text-3xl' value={rightAction} onChange={({ target }) => setRightAction(target.value)} />
                          </div>
                          <div className="flex flex-col">
                            <label htmlFor='true_character'>True Character_</label>
                            <input placeholder={lorem} id='true_character' type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl min-[1800px]:text-2xl min-[1800px]:text-3xl' value={trueCharacter} onChange={({ target }) => setTrueCharacter(target.value)} />
                          </div>

                        </div>
                      </div>
                    </div>
                    <div className="px-20 w-full border-t border-[#464648]">
                      <LowerButtons handleSave={handleSave} setPage={setPage} />
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
              className='flex flex-col justify-center max-lg:min-h-screen items-center pt-5 max-lg:overflow-y-scroll'>
              <div className="lg:pl-[190px] border-t border-[#464648]">

                <Title title={title} setTitle={setTitle} />

              </div>
              <div className="poster w-full lg:pl-[190px]">
                <div className="lg:flex border-b border-[#464648]">

                  <PosterFrame poster={poster} />

                  <div className="flex flex-col w-full min-h-full justify-start items-start gap-y-5">
                    <h1 className='font-body w-full text-4xl text-white py-5 border-b border-[#464648] px-2 lg:px-20'>Objective & Opposition_</h1>
                    <div className="flex flex-col px-2 lg:px-20 py-11">
                      <label htmlFor='objective'>Objective_</label>
                      <input placeholder={lorem} id='objective' type='text' className='font-body text-[#aaaaaa] w-full sm:w-[35vw] bg-transparent text-xl min-[1800px]:text-2xl min-[1800px]:text-3xl' value={objective} onChange={({ target }) => setObjective(target.value)} />
                    </div>
                    <div className="flex flex-col px-2 lg:px-20 gap-y-5 ">
                      <div className="flex max-sm:flex-col gap-x-10">
                        <div className="flex flex-col">
                          <label htmlFor='antagonismA'>Antagonism by Antagonist_</label>
                          <input placeholder={lorem} id='antagonismA' className='font-body text-[#aaaaaa] bg-transparent text-xl min-[1800px]:text-2xl min-[1800px]:text-3xlw-full sm:w-[28vw]' value={antagonismAnt} onChange={({ target }) => setAntagonismAnt(target.value)} />
                        </div>
                        <div className="flex flex-col">
                          <label htmlFor='antagonismall'>Antagonism by Allies_</label>
                          <input placeholder={lorem} id='antagonismall' type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl min-[1800px]:text-2xl min-[1800px]:text-3xl w-full sm:w-[28vw]' value={antagonismAll} onChange={({ target }) => setAntagonismAll(target.value)} />
                        </div>
                      </div>
                      <div className="flex max-sm:flex-col gap-x-10">
                        <div className="flex flex-col">
                          <label htmlFor='sameObjective'>Same Objective_</label>
                          <input placeholder={lorem} id='sameObjective' type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl min-[1800px]:text-2xl min-[1800px]:text-3xl w-full sm:w-[28vw]' value={sameObjective} onChange={({ target }) => setSameObjective(target.value)} />
                        </div>
                        <div className="flex flex-col">
                          <label htmlFor='distance'>Distance from Objective_</label>
                          <input placeholder={lorem} id='distance' className='font-body text-[#aaaaaa] bg-transparent text-xl min-[1800px]:text-2xl min-[1800px]:text-3xl w-full sm:w-[28vw]' value={distance} onChange={({ target }) => setDistance(target.value)} />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor='resolve'>Test Resolve_</label>
                        <input placeholder={lorem} id='resolve' type='text' className='font-body text-[#aaaaaa] bg-transparent text-xl min-[1800px]:text-2xl min-[1800px]:text-3xl w-full sm:w-[28vw]' value={resolve} onChange={({ target }) => setResolve(target.value)} />
                      </div>
                    </div>
                    <div className="px-20 w-full border-t border-[#464648]">
                      <LowerButtons handleSave={handleSave} setPage={setPage} />
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
              className='flex flex-col justify-center items-center pt-5'>
              <div className="mr-auto pl-[190px] border-t border-[#464648]">

                <div className="flex flex-col justify-center">
                  <input className='font-title2 text-5xl w-full border-b border-[#464648] py-2 pl-[3%] sm:text-[108px] bg-transparent' placeholder='Title' type='text' value={title} onChange={({ target }) => setTitle(target.value)} />
                </div>

              </div>
              <div className="w-full pl-[190px]">
                <div className="lg:flex border-b border-[#464648]">

                  <PosterFrame poster={poster} />

                  <div className="flex flex-col w-full h-[74vh] justify-start items-start">
                    <div className="flex h-full">
                      <iframe
                        className='h-full  border-r border-[#464648]'
                        src={'https://drive.google.com/file/d/1TK_DnG7vnbrDx7J178_0jHNqZ8mTobKD/preview'}
                        allow="autoplay"
                      ></iframe>
                      <iframe
                        className='h-full'
                        src={'https://drive.google.com/file/d/1TK_DnG7vnbrDx7J178_0jHNqZ8mTobKD/preview'}
                        width="950"
                        height="463"
                        allow="autoplay"
                      ></iframe>
                    </div>
                    <div className="px-20 w-full border-t border-[#464648]">
                      <LowerButtons handleSave={handleSave} setPage={setPage} />
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
              className='flex flex-col justify-center items-center pt-5'>
              <div className="mr-auto pl-[190px] border-t border-[#464648]">

                <div className="flex flex-col justify-center">
                  <input className='font-title2 text-5xl w-full border-b border-[#464648] py-2 pl-[3%] sm:text-[108px] bg-transparent' placeholder='Title' type='text' value={title} onChange={({ target }) => setTitle(target.value)} />
                </div>

              </div>
              <div className="w-full pl-[190px]">
                <div className="lg:flex border-b border-[#464648]">

                  <PosterFrame poster={poster} />

                  <div className="flex flex-col w-full h-[74vh] justify-start items-start">
                    <div className="flex h-full">
                      <iframe
                        className='border-r border-[#464648]'
                        src={'https://drive.google.com/file/d/1cFp5STS1cYfrtmnsgodWNES0gQMG91cH/preview'}
                        allow="autoplay"
                      ></iframe>
                      <iframe
                        className='h-full'
                        src={'https://drive.google.com/file/d/1cFp5STS1cYfrtmnsgodWNES0gQMG91cH/preview'}
                        width="948"
                        height="463"
                        allow="autoplay"
                      ></iframe>
                    </div>
                    <div className="px-20 w-full border-t border-[#464648]">
                      <LowerButtons handleSave={handleSave} setPage={setPage} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        }
      </>

    </div>
  )
}

{/* script.genres.map((genre, i) => (
      <div key={i} className="bg-gradient-to-r from-primary to-danger rounded-full px-2 sm:px-5">
        <p className='font-carbon text-white text-md sm:text-lg'>{genre}</p>
      </div>
    )) */}