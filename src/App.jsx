import React, { useEffect, useState } from 'react'
import { useApolloClient, useQuery, useSubscription } from '@apollo/client'
import { motion } from 'framer-motion'
import { ALL_POSTS, ALL_USERS, POST_ADDED, USER_ADDED } from './queries/queries'
import { getAll } from './services/lessons'
import Notification from './components/Notification'
import { JoyForm } from './components/JoyForm'
import { Banner } from './components/Banner'
import { Feed } from './components/Feed'
import { Profile } from './components/Profile'
import { InfinitySpin } from 'react-loader-spinner'
import { Link, Route, Routes, useMatch } from 'react-router-dom'
import { Syllabus } from './views/syllabus'
import { Project } from './views/project'
import { Blog } from './views/blog'
import { BlogPost } from './views/blogPost'
import { Blog as BlogIcon, Schematics, SendAlt, TableOfContents, Course } from '@carbon/icons-react'
import { Sling as Hamburger } from 'hamburger-react'

import projectsService from './services/projects'
import { Lesson } from './views/lesson'
import { fadeInSmall } from './variants'

const Navbar = ({ menu, setMenu }) => {
  return (
    <div className="flex justify-between items-center fixed w-full py-0 sm:py-2 px-3 sm:px-10 z-[2] border-b border-[#464648] bg-[#10100e]">
      <Link to={'/'}>
        <h1 className='text-2xl font-title2 text-white glow uppercase'>Questival</h1>
      </Link>
      <>
        <div className='hidden sm:flex justify-center items-center font-body text-md gap-x-4'>
          <Link to={'/myproject'} className="flex justify-center items-center gap-x-1 text-[#aaaaaa] hover:text-white">
            <Schematics size={16} />
            <p className='text-sm font-body'>My Project</p>
          </Link>
          <Link to={'/'} className="flex justify-center items-center gap-x-1 text-[#aaaaaa] hover:text-white">
            <Course size={16} />
            <p className='text-sm font-body'>Course</p>
          </Link>
          <Link to={'/syllabus'} className="flex justify-center items-center gap-x-1 text-[#aaaaaa] hover:text-white">
            <TableOfContents size={16} />
            <p className='text-sm font-body'>Syllabus</p>
          </Link>
          <Link to={'/blog'} className="flex justify-center items-center gap-x-1 text-[#aaaaaa] hover:text-white">
            <BlogIcon size={16} />
            <p className='text-sm font-body'>Blog</p>
          </Link>
          <Link to={'/'} className="flex justify-center items-center gap-x-1 text-[#aaaaaa] hover:text-white">
            <SendAlt size={16} />
            <p className='text-sm font-body'>Contact</p>
          </Link>
        </div>
        <div className='flex sm:hidden justify-center items-center font-body text-md gap-x-4'>
          <motion.div
            className='flex flex-col items-center fixed bg-[#10100e] left-[65%] min-[300px]left-[70%] min-[500px]:left-[80%] top-[5.4%] border-b p-5 gap-y-2 border-x border-[#464648] z-0'
            variants={fadeInSmall('down', 0.5)}
            initial='hidden'
            whileInView={menu}
            viewport={{ once: false, amount: 0.7 }}>
            <Link to={'/myproject'} className="flex justify-center items-center gap-x-1 text-[#aaaaaa] hover:text-white">
              <Schematics size={16} />
              <p className='text-sm font-body'>My Project</p>
            </Link>
            <Link to={'/'} className="flex justify-center items-center gap-x-1 text-[#aaaaaa] hover:text-white">
              <Course size={16} />
              <p className='text-sm font-body'>Course</p>
            </Link>
            <Link to={'/syllabus'} className="flex justify-center items-center gap-x-1 text-[#aaaaaa] hover:text-white">
              <TableOfContents size={16} />
              <p className='text-sm font-body'>Syllabus</p>
            </Link>
            <Link to={'/blog'} className="flex justify-center items-center gap-x-1 text-[#aaaaaa] hover:text-white">
              <BlogIcon size={16} />
              <p className='text-sm font-body'>Blog</p>
            </Link>
            <Link to={'/'} className="flex justify-center items-center gap-x-1 text-[#aaaaaa] hover:text-white">
              <SendAlt size={16} />
              <p className='text-sm font-body'>Contact</p>
            </Link>
          </motion.div>
          <Hamburger color='white' size={20} rounded onToggle={() => menu === 'hide' ? setMenu('show') : setMenu('hide')} />
        </div>
      </>
    </div>
  )
}

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
    <div id='joybook' className={'flex relative bg-[#10100e] h-screen scrollbar-none'}>
      <div className="absolute top-[10%] left-[45%] z-40">
        <Notification errorMessage={errorMessage} type={type} />
      </div>
      {
        token ?
          (
            <div className='flex overflow-x-hidden'>
              <div className="hidden lg:flex w-[10%] fixed bg-[#3b1950] z-10">
                <Profile setType={setType} setToken={setToken} setError={setErrorMessage} />
              </div>
              <div className="flex lg:hidden">
                <Navbar menu={menu} setMenu={setMenu} />
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
