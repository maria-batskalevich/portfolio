import React from "react";
import s from "./Footer.module.scss";

type FooterIconPropsType = {
    id: number
    link: string
    title: string
    logo: string
}

export const FooterIcon = (props: FooterIconPropsType) => {
    return (
        <div className={s.icon}>
            <a href={props.link}>
                <img src={props.logo}/>
            </a>
        </div>
    )
}