import React from 'react'
import '../style/codentaus-tags-style.scss'
import { useTranslation } from 'gatsby-plugin-react-i18next';


const TAGS = ['software house', 'embedded systems', 'web apps',
  'mobile apps', 'websites', 'scripts', 'e-shops', 'R&D',
]

const CodenatusTags = () => {
  const {t} = useTranslation()

  return (
    <div className="codenauts-tags-ctn">
      <p className="title-text">{t`home.we_are`} <span>{t`home.codenauts_io`}</span></p>
      <div className="tags-grid">
        {
          TAGS.slice(0,3).map(tag => <Tag text={tag}/>)
        }
      </div>
      <div className="tags-grid">
        {
          TAGS.slice(3,TAGS.length).map(tag => <Tag text={tag}/>)
        }
      </div>
    </div>
  );
}

const Tag = ({text}) => (
  <div className="tag-ctn">
    <p>{text}</p>
  </div>
)

export default CodenatusTags;
