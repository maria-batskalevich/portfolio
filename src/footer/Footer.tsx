import React from "react";
import s from './Footer.module.scss'
import github from '../assets/image/footer-social/github-logo.png'
import linkedIn from '../assets/image/footer-social/linkedin-logo.png'
import telegram from '../assets/image/footer-social/telegram-logo.png'
import codewars from '../assets/image/footer-social/codeWars-logo.png'
import {Title} from "../common/components/Title";
import {FooterIcon} from "./FooterIcon";


export const Footer = () => {
    const socialLinks = [
        {id: 1, logo: github, link: 'https://github.com/maria-batskalevich'},
        {id: 2, logo: codewars, link: 'https://www.codewars.com/users/Maria.Batskalevich'},
        {id: 3, logo: linkedIn, link: 'https://www.linkedin.com/in/maria-batskalevich-18b289230/'},
        {id: 4, logo: telegram, link: 'https://t.me/maria_batskalevich'},

    ]

    return (
        <div className={s.footerBlock}>
            <div className={`${s.container}`}>
                <Title title={'Maria Batskalevich'}/>
                <div className={s.footerSocialIcons}>
                    {socialLinks.map(f => <FooterIcon id={f.id} logo={f.logo} link={f.link} title={f.logo}/>)}
                </div>
                <span className={s.copyright}> 2022 All rights reserved</span>

            </div>
        </div>

    )
}


