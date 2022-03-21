import React from "react";
import s from './Skill.module.scss'

type PropsType = {
    logo: string
    title: string
    // description: string
}

export const Skill = (props: PropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}>
                <img src={props.logo} alt={'logo'}/>
            </div>
                <h3>{props.title}</h3>
        </div>
    )
}
