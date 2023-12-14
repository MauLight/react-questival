import hero from '../assets/background_web.mp4'
import { JoyForm } from './JoyForm'

export const Banner = ({ setUser, setToken, setError }) => {
  return (
    <div className='flex justify-center items-center w-screen relative'>
      <JoyForm setUser={setUser} setToken={setToken} setError={setError} />
      <div
        className="flex w-screen h-screen overflow-hidden scrollbar-none absolute"
      >
        <video
          src={hero}
          type='video/mp4'
          loop
          controls={false}
          muted
          autoPlay
          className="object-cover w-full min-h-screen box-border overflow-hidden scrollbar-none opacity-60"
        />
      </div>
    </div>

  )
}
