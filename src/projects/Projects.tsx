import React from "react";
import s from './Projects.module.scss'
import styleContainer from '../../src/common/styles/Container.module.css'
import {Project} from "./proect/Project";
import {Title} from "../common/components/Title";
import todoImage from './../assets/image/myProjects/todolist.png'
import reactHomeworkImage from './../assets/image/myProjects/reactHomework.png'
import counterImage from './../assets/image/myProjects/counter.png'


export const Projects = () => {
    const todolist = {
        backgroundImage: `url(${todoImage})`
    }
    const counter = {
        backgroundImage: `url(${counterImage})`
    }
    const reactHomework = {
        backgroundImage: `url(${reactHomeworkImage})`
    }
    const socialNetwork = {
        backgroundImage: `url(${reactHomeworkImage})`
    }
    const todolistLink = 'https://maria-batskalevich.github.io/it-inc-todolist'
    const counterLink = 'https://maria-batskalevich.github.io/it-inc-counter/'
    const reactHomeworkLink = 'https://maria-batskalevich.github.io/it-inc-homeworks-react-ignat/#/pre-junior'
    const socialNetworkLink = 'https://maria-batskalevich.github.io/it-inc-social-network/'

    return (
        <div className={s.projectsBlock} id={'projects'}>
            <a id={'projects'}></a>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <Title title={'Projects'}/>
                <div className={s.projects}>
                    <Project style={todolist} title={'Todolist'} description={'React, Redux, TypeScript and Material-UI have been used in this project to help a user create lists of tasks.'} link={`${todolistLink}`}/>
                    <Project style={counter} title={'Counter'} description={'React, Redux, TypeScript and Material-UI have been used in this project.'} link={`${counterLink}`}/>
                    <Project style={reactHomework} title={'React homework'} description={'React, Redux and TypeScript have been used in this project.'} link={`${reactHomeworkLink}`} />
                    {/*<Project style={socialNetwork} title={'Social network'} description={'React, Redux and TypeScript have been used in this project.'} link={`${socialNetworkLink}`} />*/}
                </div>
            </div>
        </div>
    )
}
