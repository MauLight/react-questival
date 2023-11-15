import { motion } from 'framer-motion'
import { fadeInSmall } from '../variants'
import { Card } from './Card'
import { Link } from 'react-router-dom'

export const Feed = ({ lessons, setError }) => {

  return (
    <motion.div
      variants={fadeInSmall('left', 0.2)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.7 }}
      className="flex items-center lg:pl-[188px] overflow-x-scroll scrollbar-none max-lg:pb-10 max-lg:pt-12 lg:py-10 h-screen bg-[#10100e] w-screen"
    >
      <div

        className="flex border-b border-[#464648] lg:border-t border-[#464648] h-full">
        {
          lessons && lessons.map(post => <Link key={post.id} to={`/lessons/${post.id}`} >
            <Card
              id={post.id}
              lesson={post.lesson}
              title={post.title}
              img={post.img}
              body={post.body}
              tags={post.tags}
              setError={setError}
            />
          </Link>
          )
        }
      </div>
    </motion.div>
  )
}
