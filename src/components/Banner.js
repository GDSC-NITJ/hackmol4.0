import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import headerImg from '../public/project-img4.png';
import headerImg from '../public/project-img4.png'
// import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Connect.", "Build.", "Innovate." ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
        <div className="banner-row">
          <div className="banner_left">
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to HACKMOL4.0</span>
                {/* <h1><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Connect", "Build", "Innovate" ]'><span className="wrap">{text}</span></span></h1> */}
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <div className="banner__buttons__one">
                  <button className="tagline below" onClick={() => console.log('connect')}>Button1</button>
                  <button className="tagline below" onClick={() => console.log('connect')}>Button1</button></div>
              </div>}
            </TrackVisibility>
          </div>
        
          <div className="banner_right">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img className = "banner-right-img" src={headerImg.src} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </div>
          <div className="banner__buttons__two">
                  <button id = "left" className="tagline below" onClick={() => console.log('connect')}>Button1</button>
                  <button id="right" className="tagline below right" onClick={() => console.log('connect')}>Button1</button></div>
        </div>
    </section>
  )
}
export default Banner;