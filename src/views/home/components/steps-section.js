import React from 'react'
import '../style/steps-section-style.scss'
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { BLueFullCircle, BlueMatrix, OrangeCircle } from '../../../components/theme/theme-component';
import { gsap } from 'gsap';

const STEPS = [
  {
    nr: "01",
    title: "home.steps_meeting_title",
    text: "home.steps_meeting_text"
  },
  {
    nr: "02",
    title: "home.steps_design_title",
    text: "home.steps_design_text"
  },
  {
    nr: "03",
    title: "home.steps_implementation_title",
    text: "home.steps_meeting_text"
  },
  {
    nr: "04",
    title: "home.steps_testing_title",
    text: "home.steps_meeting_text"
  },
  {
    nr: "05",
    title: "home.steps_support_title",
    text: "home.steps_meeting_text"
  },
]

const StepsSection = () => {
  const {t} = useTranslation()
  const stepsCtn = React.useRef(null);

  React.useEffect(() => {
    const steps = stepsCtn.current.querySelectorAll(".text-ctn")
    for (const step of steps) {
      gsap.from(step, {
        opacity: 0,
        y: 100,
        scrollTrigger: {
          trigger: step,
          scrub: 1,
          start: "top 95%",
          end: 'top 90%',
        }
      })
    }

    const numbers = stepsCtn.current.querySelectorAll(".number-ctn")
    for (const number of numbers) {
      gsap.to(number, {
        scrollTrigger: {
          trigger: number,
          start: "top 40%",
          end: 'bottom top',
          scrub: true,
          toggleClass: "active-number-ctn"
        }
      })
    }
  }, [])

  return (
    <section className="section-ctn">
      <div className="theme-ctn steps-theme-ctn">
        <OrangeCircle className="theme"/>
        <BLueFullCircle className="theme-top"/>
        <BlueMatrix className="theme-bottom"/>
      </div>
      <div className="ctn steps-ctn">
        <div id="stepsTextCtn" className="text-ctn">
          <span className="section-label">{t`home.steps_label`}</span>
          <h2>{t`home.steps_title`}</h2>
          <p>{t`home.steps_text`}</p>
        </div>
        <div ref={stepsCtn} className="steps-flex-ctn">
          <div className="line-ctn">
            <div/>
          </div>
          {
            STEPS.map((step) => (
              <div className="step-ctn" key={step.nr}>
                <div className="number-ctn">
                  <div>
                    <span>{t(step.nr)}</span>
                  </div>
                </div>
                <div className="text-ctn">
                  <h3>{t(step.title)}</h3>
                  <p>{t(step.text)}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default StepsSection;
