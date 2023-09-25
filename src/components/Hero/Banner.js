import { useState, useEffect } from 'react'
// import headerImg from '../public/project-img4.png';
import headerImg from '../../../public/project-img4.png'
import TrackVisibility from 'react-on-screen'
import Link from 'next/link'

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const [index, setIndex] = useState(1)
  const toRotate = ['Connect.', 'Build.', 'Innovate.']
  const period = 2000

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    }
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setIndex((prevIndex) => prevIndex - 1)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setIndex(1)
      setDelta(500)
    } else {
      setIndex((prevIndex) => prevIndex + 1)
    }
  }

  return (
    <section className='banner' id='home'>
      <div className='banner-row'>
        <div className='banner_left'>
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible ? 'animate__animated animate__fadeIn' : ''
                }>
                <span className='tag'>
                  Collaborate, create, and change the world
                </span>
                <br></br>
                <br></br>
                {/* <h1><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Connect", "Build", "Innovate" ]'><span className="wrap">{text}</span></span></h1> */}
                <p>
                  HackMOL is the flagship annual 30-hour hackathon being
                  organised by Google Developer Student (GDSC) of NIT Jalandhar
                  <span className='hide'>
                    wherein young coders & developers from all over the country
                    join together to build projects & solutions to the alarming
                    problems of the region & the world.
                  </span>{' '}
                </p>

                <div className='banner__buttons__one flex flex-row-reverse gap-7 justify-end  items-end'>
                  <Link
                    target='_blank'
                    rel='noreferrer'
                    href='http://dsc.gg/nitj'>
                    <button
                      id='left'
                      className='tagline  below m-0 w-40 text-base  '
                      onClick={() => console.log('connect')}>
                      Join Discord
                    </button>
                  </Link>
                  {/* <Link
                    target='_blank'
                    rel='noreferrer'
                    href='https://www.nitj.ac.in/events_registration/hackmol/login'>
                    <button
                      id='right'
                      className='tagline below w-40'
                      onClick={() => console.log('connect')}>
                      Register
                    </button>
                  </Link> */}
                </div>
              </div>
            )}
          </TrackVisibility>
        </div>

        <div className='banner_right'>
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible ? 'animate__animated animate__zoomIn' : ''
                }>
                <img
                  className='banner-right-img'
                  src={headerImg.src}
                  alt='Header Img'
                />
              </div>
            )}
          </TrackVisibility>
        </div>
        <div className='banner__buttons__two flex flex-row-reverse gap-5 flex-wrap  items-stretch justify-items-stretch '>
          <Link
            target='_blank'
            rel='noreferrer'
            href='http://dsc.gg/nitj'>
            <button
              id='left'
              className='tagline below  w-64  '
              onClick={() => console.log('connect')}>
              Join Discord
            </button>
          </Link>
          {/* <Link
            target='_blank'
            rel='noreferrer'
            href='https://www.nitj.ac.in/events_registration/hackmol/login'>
            <button
              id='right'
              className='tagline below right w-40 mr-0 '
              onClick={() => console.log('connect')}>
              Register
            </button>
          </Link> */}
             <div
                      data-hackathon-slug="hackmol-4"
                      data-button-theme="dark"
                      id='right'
                      style={{
                        height: '50px',
                      }}
                      className='apply-button tagline below w-40 '
                    ></div>
        </div>
      </div>
    </section>
  )
}
export default Banner
