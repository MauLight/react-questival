import React, { useEffect, useState } from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import { getAll } from './services/lessons'

//! Views
import { Syllabus } from './views/syllabus'
import { Blog } from './views/blog'
import { BlogPost } from './views/blogPost'
import { Lesson } from './views/lesson'
import { Project2 } from './views/Project2'

//! Components
import { Navbar } from './components/Navbar'
import Notification from './components/Notification'
import { Banner } from './components/Banner'
import { Feed } from './components/Feed'
import { Profile } from './components/Profile'
import { Test } from './views/Test'
import { lessons as thelessons } from './utils/posts.js'
import { Portfolio } from './views/Portfolio.jsx'



export const App = () => {

  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [type, setType] = useState(null)
  const [menu, setMenu] = useState('hide')

  // eslint-disable-next-line no-unused-vars
  const [lessons, setLessons] = useState(thelessons)

  const matchBlog = useMatch('/blogpost/:id')
  const blogId = matchBlog ? matchBlog.params.id : null
  const matchLesson = useMatch('/lessons/:id')
  const lessonId = matchLesson ? matchLesson.params.id : null

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('QuestivalUser')
    if (loggedUserJSON) {
      const currentUser = JSON.parse(loggedUserJSON)
      console.log('This is the user:', user)
      setUser(currentUser)
      setToken(currentUser.token)
    }
  }, [])

  useEffect(() => {
    getAll()
      .then(response => {
        console.log('Fetching lessons fulfilled!', response)
      })
  }, [])


  const notify = (message) => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 10000)
  }

  return (
    <div id='joybook' className={'flex relative bg-[#10100e] h-screen scrollbar-none'}>
      <div className="flex justify-center absolute top-[0%] z-40 w-full">
        <Notification errorMessage={errorMessage} type={type} />
      </div>
      {
        token ?
          (
            <div className='flex max-xl:flex-col overflow-x-hidden w-screen'>
              <div className="hidden xl:flex w-[10%] fixed z-50">
                <Profile setType={setType} setToken={setToken} setError={setErrorMessage} />
              </div>
              <div className="flex xl:hidden z-50">
                <Navbar menu={menu} setMenu={setMenu} setToken={setToken} />
              </div>
              <div className="relative overflow-x-hidden w-full xl:w-[90%] max-xl:flex max-xl:justify-center max-xl:px-2 max-xl:items-center xl:ml-[10%]">
                <Routes>
                  <Route path="/" element={<Feed lessons={lessons} setError={setErrorMessage} />} />
                  <Route path="/syllabus" element={<Syllabus />} />
                  <Route path="/test" element={<Test />} />
                  <Route path="/portfolio" element={<Portfolio currentUser={user} setError={setErrorMessage} />} />
                  <Route path="/myproject" element={<Project2 currentUser={user} setError={setErrorMessage} />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blogpost/:id" element={<BlogPost blogId={blogId} />} />
                  <Route path="/lessons/:id" element={<Lesson lessonId={lessonId} lessons={lessons} />} />
                </Routes>
              </div>
            </div>
          )
          :
          (

            <Banner setUser={setUser} setToken={setToken} setError={notify} />
          )

      }
    </div>
  )
}
