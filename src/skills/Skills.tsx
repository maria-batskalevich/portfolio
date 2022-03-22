import React from "react";
import s from './Skills.module.scss'
import styleContainer from '../../src/common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/Title";
import javascript from '../assets/image/skills/icon-javascript.png'
import css from '../assets/image/skills/icon-css.png'
import react from '../assets/image/skills/icon-react.png'
import redux from '../assets/image/skills/icon-redux.png'
import typescript from '../assets/image/skills/icon-typescript.png'
import material from '../assets/image/skills/icon-material-ui.png'
import github from '../assets/image/footer-social/github-logo.png'
import html from '../assets/image/skills/icon-html-5.png'
import sass from '../assets/image/skills/icon-sass.png'
import restapi from '../assets/image/skills/icon-rest-api.png'
import storybook from '../assets/image/skills/icon-storybook.png'
import formik from '../assets/image/skills/icon-formik.png'

const skills = [
    {id: 1, title: "JavaScript", logo: javascript},
    {id: 2, title: "React", logo: react},
    {id: 3, title: "Redux", logo: redux},
    {id: 4, title: "TypeScript", logo: typescript},
    {id: 5, title: "HTML", logo: html},
    {id: 6, title: "CSS", logo: css},
    {id: 7, title: "SASS", logo: sass},
    {id: 8, title: "REST API", logo: restapi},
    {id: 9, title: "Material-Ui", logo: material},
    {id: 10, title: "GitHub", logo: github},
    {id: 11, title: "Storybook", logo: storybook},
    {id: 12, title: "Formik", logo: formik},
]


export const Skills = () => {
    return (
        <div className={s.skillsBlock} id={'skills'}>
            <a id={'skills'}></a>

            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <div></div>
                <Title title={'Skills'}/>
                <div className={s.skills}>
                    {skills.map(s => <Skill key={s.id} title={s.title} logo={s.logo}/>)}
                </div>
            </div>

        </div>
    )
}
