import * as React from "react"
import './style.css'
import { StaticImage } from 'gatsby-plugin-image';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";



const IndexPage = () => {

  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  let arrowBtnStyle = "nav-arrow-icon";
  if (offset > 50) {
    arrowBtnStyle = "nav-arrow-icon nav-arrow-icon-bottom";
  }

  return (
    <main className="page-ctn">
      <title>AppMoon</title>

      <StaticImage
        src="../images/blurred-bg.png"
        alt="blurred background"
        className="gradient main-bg-desktop"
        placeholder="none"
        loading="eager"
      />

      <StaticImage
        src="../images/blurred-bg-mobile.png"
        alt="blurred background"
        className="gradient main-bg-mobile"
        placeholder="none"
        loading="eager"
      />

      <div className="ctn landing-ctn">
        <h1>Chwitliwy tekścior cool & super</h1>
        <p>Masz wizję i potrzbujesz kogoś kto Ci w tym pomoże? Napisz do nas a my prześlemy Ci wycene za darmo! 🎉</p>
        <a href="#contact" className="call-to-action_btn">
          <p>Napisz do nas</p>
          <StaticImage
            src="../images/arrow-right.png"
            alt="Right arrow"
            className="arrow-icon"
          />
        </a>
      </div>
      <div className={arrowBtnStyle}>
        <StaticImage
          src="../images/arrow-right.png"
          alt="Right arrow"
        />
      </div>

      <div className="ctn offer-ctn">
        <div className="offer-text-ctn">
          <p className="section-subtitle">NASZA OFERTA</p>
          <h2>Działamy w wielu dziedzinach</h2>
          <p className="section-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <a className="forward-btn">
            <p>Poproś o darmową wycenę</p>
            <StaticImage
              src="../images/arrow-right.png"
              alt="Right arrow"
              className="arrow-icon"
            />
          </a>
        </div>
        <div className="offer-offer-ctn">
          <StaticImage
            src="../images/main-gradient-moon.png"
            alt="Moon gradient"
            className="offer-gradient"
            placeholder="none"
          />
          <div className="glassy-ctn g1">
            <h3>Aplikacje webowe</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem impusm cos tam dalej</p>
          </div>
          <div className="glassy-ctn g2">
            <h3>Systemy embedded</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem</p>
          </div>
          <div className="glassy-ctn g3">
            <h3>Aplikacje mobilne</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem</p>
          </div>
          <div className="glassy-ctn g4">
            <h3>R&D</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem</p>
          </div>
        </div>
      </div>

      <div className="ctn about-us_ctn">
        <h1>Troche o nas</h1>
        <div className="members-ctn">
          <StaticImage
            src="../images/blue-gradient-moon.png"
            alt="Moon gradient"
            className="member-left-gradient"
            placeholder="none"
          />
          <StaticImage
            src="../images/purple-gradient-moon.png"
            alt="Moon gradient"
            className="member-right-gradient"
            placeholder="none"
          />
          <div className="glassy-ctn">
            <StaticImage
              src="../images/piotr_kedra.jpeg"
              alt="Piotr Kedra"
              className="member-avatar"
            />
            <h3>PIOTR KĘDRA</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem   and typesetting industry. Lorem cos tam dalej yoi</p>
            <div className="member-socials">
              <a href="#">
                <FaLinkedinIn size="1.8rem"/>
              </a>
              <a href="#">
                <FaGithub style={{marginLeft: '1rem'}} size="1.8rem"/>
              </a>
            </div>
          </div>
          <div className="glassy-ctn">
            <StaticImage
              src="../images/piotr_kedra.jpeg"
              alt="Piotr Kedra"
              className="member-avatar"
            />
            <h3>PIOTR KĘDRA</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem   and typesetting industry. Lorem cos tam dalej yoi</p>
            <div className="member-socials">
              <a href="#">
                <FaLinkedinIn size="1.8rem"/>
              </a>
              <a href="#">
                <FaGithub style={{marginLeft: '1rem'}} size="1.8rem"/>
              </a>
            </div>
          </div>
          <div className="glassy-ctn">
            <StaticImage
              src="../images/piotr_kedra.jpeg"
              alt="Piotr Kedra"
              className="member-avatar"
            />
            <h3>PIOTR KĘDRA</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem   and typesetting industry. Lorem cos tam dalej yoi</p>
            <div className="member-socials">
              <a href="#">
                <FaLinkedinIn size="1.8rem"/>
              </a>
              <a href="#">
                <FaGithub style={{marginLeft: '1rem'}} size="1.8rem"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
