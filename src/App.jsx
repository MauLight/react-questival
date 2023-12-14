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



export const App = () => {

  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [type, setType] = useState(null)
  const [menu, setMenu] = useState('hide')

  const [lessons, setLessons] = useState(null)

  const matchBlog = useMatch('/blogpost/:id')
  const blogId = matchBlog ? matchBlog.params.id : null
  const matchLesson = useMatch('/lessons/:id')
  const lessonId = matchLesson ? matchLesson.params.id : null

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('QuestivalUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      setToken(user.token)
    }
  }, [])

  useEffect(() => {
    getAll()
      .then(response => {
        console.log('Fetching lessons fulfilled!')
        setLessons(response)
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
      <div className="absolute top-[10%] left-[45%] z-40">
        <Notification errorMessage={errorMessage} type={type} />
      </div>
      {
        token ?
          (
            <div className='flex overflow-x-hidden'>
              <div className="hidden lg:flex w-[10%] fixed bg-[#3b1950] z-50">
                <Profile setType={setType} setToken={setToken} setError={setErrorMessage} />
              </div>
              <div className="flex lg:hidden">
                <Navbar menu={menu} setMenu={setMenu} />
              </div>
              <div className="">
                <Routes>
                  <Route path="/" element={<Feed lessons={lessons} setError={setErrorMessage} />} />
                  <Route path="/syllabus" element={<Syllabus />} />
                  <Route path="/test" element={<Test />} />
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
