import React from 'react'
import '../style/steps-section-style.scss'
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { BLueFullCircle, BlueMatrix, OrangeCircle } from '../../../components/theme/theme-component';

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

  return (
    <section className="section-ctn">
      <div className="ctn steps-ctn">
        <div className="text-ctn">

          <OrangeCircle className="theme"/>
          <span className="section-label">{t`home.steps_label`}</span>
          <h2>{t`home.steps_title`}</h2>
          <p>{t`home.steps_text`}</p>
        </div>
        <div className="steps-flex-ctn">
          <BLueFullCircle className="theme-top"/>
          <BlueMatrix className="theme-bottom"/>
          <div className="line-ctn">
            <div/>
          </div>
          {
            STEPS.map((step) => (
              <div>
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
