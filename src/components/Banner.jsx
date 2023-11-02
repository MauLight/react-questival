import hero from '../assets/hero.mp4'

export const Banner = () => {
  return (
    <div
      className="joy hidden min-[1200px]:flex w-full h-screen"
    >
      <video
        src={hero}
        type='video/mp4'
        loop
        controls={false}
        muted
        autoPlay
        className="object-cover w-full h-auto box-border overflow-hidden"
      />
    </div>
  )
}
