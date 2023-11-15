import hero from '../assets/end.mp4'

export const Banner = () => {
  return (
    <div
      className="hidden md:flex w-full h-screen overflow-hidden scrollbar-none"
    >
      <video
        src={hero}
        type='video/mp4'
        loop
        controls={false}
        muted
        autoPlay
        className="object-cover w-full min-h-screen box-border overflow-hidden scrollbar-none opacity-20"
      />
    </div>
  )
}
