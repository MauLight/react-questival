import React, { useEffect, useState } from 'react'
import { useApolloClient, useQuery, useSubscription } from '@apollo/client'
import { ALL_POSTS, ALL_USERS, POST_ADDED, USER_ADDED } from './queries/queries'
import { getAll } from './services/lessons'
import Notification from './components/Notification'
import { JoyForm } from './components/JoyForm'
import { Banner } from './components/Banner'
import { Feed } from './components/Feed'
import { Profile } from './components/Profile'
import { InfinitySpin } from 'react-loader-spinner'
import { Route, Routes, useMatch } from 'react-router-dom'
import { Syllabus } from './views/syllabus'
import { Project } from './views/project'
import { Blog } from './views/blog'
import { BlogPost } from './views/blogPost'

import projectsService from './services/projects'
import { Lesson } from './views/lesson'

export const App = () => {

  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [type, setType] = useState(null)

  const [lessons, setLessons] = useState(null)

  const matchBlog = useMatch('/blogpost/:id')
  const blogId = matchBlog ? matchBlog.params.id : null
  const matchLesson = useMatch('/lessons/:id')
  const lessonId = matchLesson ? matchLesson.params.id : null

  const resultPosts = useQuery(ALL_POSTS)

  const client = useApolloClient()

  useSubscription(USER_ADDED, {
    onData: ({ data }) => {
      const addedUser = data.data.userAdded
      notify(`${addedUser.username} just created an account!`)
      client.cache.updateQuery({ query: ALL_USERS }, ({ allUsers }) => {
        return {
          allUsers: allUsers.concat(addedUser),
        }
      })
    }
  })

  useSubscription(POST_ADDED, {
    onData: ({ data }) => {
      const addedPost = data.data.postAdded
      notify(`${addedPost.title} was just added by ${addedPost.author.username}!`)
      client.cache.updateQuery({ query: ALL_POSTS }, ({ allPosts }) => {
        return {
          allPosts: allPosts.concat(addedPost),
        }
      })
    }
  })

  // useEffect(() => {
  //   const token = localStorage.getItem('joybook-user-token')
  //   console.log(token)
  //   if (token) {
  //     setToken(token)
  //   }
  // }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('QuestivalUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      projectsService.setToken(user.token)
    }
  }, [])

  useEffect(() => {
    getAll()
      .then(response => {
        console.log('Fetching lessons fulfilled!')
        setLessons(response)
      })
  }, [])

  if (resultPosts.loading) {
    return (
      <div className='flex justify-center items-center h-[700px] w-full'>
        <div className="flex justify-center items-center h-[700px] w-screen">

          <InfinitySpin
            color="white"
          />
        </div>
      </div>
    )
  }

  const posts = resultPosts?.data?.allPosts ? resultPosts.data.allPosts : []

  console.log(posts)

  const notify = (message) => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 10000)
  }

  return (
    <div id='joybook' className={'min-[1200px]:flex relative bg-[#10100e] h-screen'}>
      <div className="absolute top-[10%] left-[45%] z-40">
        <Notification errorMessage={errorMessage} type={type} />
      </div>
      {
        token ?
          (
            <div className='flex overflow-x-hidden'>
              <div className="w-[10%] fixed bg-[#3b1950] z-10">
                <Profile setType={setType} setToken={setToken} setError={setErrorMessage} />
              </div>
              <div className="">
                <Routes>
                  <Route path="/" element={<Feed lessons={lessons} setError={setErrorMessage} />} />
                  <Route path="/syllabus" element={<Syllabus />} />
                  <Route path="/myproject" element={<Project user={user} setError={setErrorMessage} />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blogpost/:id" element={<BlogPost blogId={blogId} />} />
                  <Route path="/lessons/:id" element={<Lesson lessonId={lessonId} lessons={lessons} />} />
                </Routes>
              </div>
            </div>
          )
          :
          (
            <>
              <JoyForm setUser={setUser} setToken={setToken} setError={notify} />
              <Banner />
            </>
          )

      }
    </div>
  )
}
