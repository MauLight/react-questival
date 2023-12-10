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

const placeholder = 'https://images.unsplash.com/photo-1611063158871-7dd3ed4a2ac8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

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

    let posterUrl = imageUrl || poster

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
      poster: posterUrl,
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
    <div className='flex flex-col h-screen w-screen overflow-hidden pl-[10%] bg-[#10100e]'>
      <Title title={title} setTitle={setTitle} />
      <div className="h-4/5 flex h-full">
        <div className="w-4/5 overflow-y-scroll scrollbar-none">
          <Logline logline={logline} setLogline={setLogline} summary={summary} setSummary={setSummary} />
          <Myth myth={myth} setMyth={setMyth} />
          <Basis basis={basis} setBasis={setBasis} />
          <Character character={character} setCharacter={setCharacter} />
          <Opposition opposition={opposition} setOpposition={setOpposition} />
          <Pitch />
          <Screenplay />
        </div>
        <div className="w-1/4 border-l border-[#464648] overflow-hidden">
          <Poster poster={poster} handlePoster={handlePoster} handleSave={handleSave} />
        </div>
      </div>
    </div>
  )
}
