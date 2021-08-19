import React from 'react'

import './skill-bar.style.scss'
import '../../sass/typography.scss'


const SkillBar = ({type, percentage,color}) => (
    <div className="skill-bar">
        <h1 style={{color: `${color}`}} className="heading-3">{type}</h1>
        <div className="progress">
            <div style={{width:`${percentage}%`,
                         height:'1rem',
                         borderRadius:'1rem',
                         paddingRight:'.5rem',
                         backgroundColor:`${color}`,
                         display: 'flex',
                         justifyContent: 'flex-end',
                         alignItems: 'center'
                        }} >
                <span>{percentage}%</span>
            </div>
        </div>

    </div>
)

export default SkillBar;