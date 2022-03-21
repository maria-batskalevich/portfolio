import React from "react";
import s from './Project.module.scss'

type PropsType = {
    style: any
    link: string
    title: string
    description: string
}

export const Project = (props: PropsType) => {
    return (
        <div className={s.project}>
            <div className={s.projectImg} style={props.style}>
                <a className={s.btn} href={props.link} target={'_blank'}>View</a>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.projectTitle}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    )
}
