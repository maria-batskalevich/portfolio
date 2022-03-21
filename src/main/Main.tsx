import React from "react";
import s from './Main.module.scss'
import ReactTypingEffect from 'react-typing-effect';
// @ts-ignore
import Flip from 'react-reveal/Flip';

export const Main = () => {
    return (
        <div className={s.mainBlock} id={'main'}>
            <a id={'main'}/>
            <div className={s.container}>
                <div className={s.text}>
                    <span>Hi There!</span>
                    <h1>I am Maria Batskalevich</h1>
                    <ReactTypingEffect
                        text={'Front-end developer'}
                        speed={50}
                    />
                </div>
                <Flip top>
                    <div className={s.photo}>
                        <div className={s.image}>
                        </div>
                    </div>
                </Flip>
            </div>

        </div>
    )
}
