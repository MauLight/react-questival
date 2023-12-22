import React, { useEffect, useState } from 'react'
import axios from 'axios'
import projectsService from '../services/projects'

//! Components
import { Poster } from '../components/Project/Poster'
import { Logline } from '../components/Project/Logline'
import { Title } from '../components/Project/Title'
import { Myth } from '../components/Project/Myth'
import { Basis } from '../components/Project/Basis'
import { Character } from '../components/Project/Character'
import { Opposition } from '../components/Project/Opposition'
import { Pitch } from '../components/Project/Pitch'
import { Screenplay } from '../components/Project/Screenplay'
import { getUser } from '../services/user'

const placeholder = 'https://i.postimg.cc/DydzwSZW/Them.jpg'

export const Project2 = ({ currentUser, setError }) => {

  //! Retrieve state of current user using useEffect
  const [user, setUser] = useState(null)

  const [title, setTitle] = useState('')
  const [poster, setPoster] = useState(placeholder)

  //* First page
  const [logline, setLogline] = useState('')
  const [summary, setSummary] = useState('')

  //THE CREATION OF A MYTH
  const [myth, setMyth] = useState({})
  const [basis, setBasis] = useState({})
  const [character, setCharacter] = useState({})
  const [opposition, setOpposition] = useState({})
  const [pitch, setPitch] = useState('')
  const [screenplay, setScreenplay] = useState('')

  //* Sends new poster to Cloudinary, updates poster state
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
        handleSave('1', response.data.secure_url)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handlePitch = (e) => {

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
        setPitch(response.data.secure_url)
        handleSave('2', response.data.secure_url)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleScreenplay = (e) => {

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
        setScreenplay(response.data.secure_url)
        handleSave('3', response.data.secure_url)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleSave = (type, file) => {

    if (title === '' || logline === '' || summary === '') {
      setError('You didn\'t write anything!')
      setTimeout(() => setError(null), 5000)
      return -1
    }

    if (type === '1') {
      let fileUrl = file || poster

      const project = {
        title,
        logline,
        summary,
        myth,
        basis,
        protagonist: character,
        opposition,
        screenplay,
        pitch,
        poster: fileUrl,
      }

      if (user.projects[0]) {
        const id = user.projects[0]._id
        projectsService.update(id, project).then(response => {
          console.log(response)
          setError('Project updated!', 'add')
          setTimeout(() => setError(null), 5000)
        })
      }
      else {
        projectsService.create(project).then(response => {
          console.log(response)
          setError('Project saved!', 'add')
          setTimeout(() => setError(null), 5000)
        })
      }
    }

    if (type === '2') {
      let fileUrl = file || pitch

      const project = {
        title,
        logline,
        summary,
        myth,
        basis,
        protagonist: character,
        opposition,
        screenplay,
        pitch: fileUrl,
        poster,
      }

      if (user.projects[0]) {
        const id = user.projects[0]._id
        projectsService.update(id, project).then(response => {
          console.log(response)
          setError('Project updated!', 'add')
          setTimeout(() => setError(null), 5000)
        })
      }
      else {
        projectsService.create(project).then(response => {
          console.log(response)
          setError('Project saved!', 'add')
          setTimeout(() => setError(null), 5000)
        })
      }
    }

    else {
      let fileUrl = file || screenplay

      const project = {
        title,
        logline,
        summary,
        myth,
        basis,
        protagonist: character,
        opposition,
        screenplay: fileUrl,
        pitch,
        poster,
      }

      if (user.projects[0]) {
        const id = user.projects[0]._id
        projectsService.update(id, project).then(response => {
          console.log(response)
          setError('Project updated!', 'add')
          setTimeout(() => setError(null), 5000)
        })
      }
      else {
        projectsService.create(project).then(response => {
          console.log(response)
          setError('Project saved!', 'add')
          setTimeout(() => setError(null), 5000)
        })
      }
    }

  }

  useEffect(() => {
    getUser(currentUser.id).then(response => {

      if (response) {
        console.log(response)
        setUser(response)
        setTitle(response.projects[0].title)
        setLogline(response.projects[0].logline)
        setSummary(response.projects[0].summary)
        setMyth(response.projects[0].myth)
        setBasis(response.projects[0].basis)
        setCharacter(response.projects[0].protagonist)
        setOpposition(response.projects[0].opposition)
        setScreenplay(response.projects[0].screenplay)
        setPitch(response.projects[0].pitch)
        setPoster(response.projects[0].poster)
      }
    }
    )
  }, [])

  return (
    <div className='flex flex-col h-screen w-full bg-[#10100e] max-lg:mt-20'>
      <>

        <div className="flex h-full">

          <div className="w-full xl:w-2/3 overflow-y-scroll overflow-x-hidden scrollbar-none">
            <Title title={title} setTitle={setTitle} />
            <div className='xl:hidden flex'>
              <Poster poster={poster} handlePoster={handlePoster} handleSave={handleSave} />
            </div>
            <Logline logline={logline} setLogline={setLogline} summary={summary} setSummary={setSummary} />
            <Myth myth={myth} setMyth={setMyth} />
            <Basis basis={basis} setBasis={setBasis} />
            <Character character={character} setCharacter={setCharacter} />
            <Opposition opposition={opposition} setOpposition={setOpposition} />
            <Pitch handlePitch={handlePitch} pitch={pitch} />
            <Screenplay handleScreenplay={handleScreenplay} screenplay={screenplay} />
          </div>
          <div className="hidden xl:flex w-1/3 border-l border-[#464648] overflow-hidden">
            <Poster poster={poster} handlePoster={handlePoster} handleSave={handleSave} />
          </div>
        </div>
      </>
    </div>
  )
}
