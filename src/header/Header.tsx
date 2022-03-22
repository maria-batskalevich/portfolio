import React from "react";
import s from '../header/Header.module.css'
import {Nav} from "./nav/Nav";
import {BurgerNav} from "./burgerNav/BurgerNav";

export const Header = () => {
    return (
        <div className={s.header}>
            <Nav/>
            <BurgerNav/>
        </div>
    )
}
