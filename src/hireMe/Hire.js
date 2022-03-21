import React from "react";
import s from './Hire.module.scss'
import styleContainer from '../../src/common/styles/Container.module.css'
import {Title} from "../common/components/Title";


export const Hire = () => {
    return (
        <div className={s.hireBlock}>
            <div className={`${styleContainer.container} ${s.hireContainer} `}>
                <Title title={'Considering options for remote work'}/>
                <a href="" className={s.hireBtn}>Hire me)))</a>

            </div>
        </div>
    )
}
