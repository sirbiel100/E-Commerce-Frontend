"use client"

import style from "./items.module.scss"

export default function Items({ isMenuOpen } : {isMenuOpen : boolean}) {
    
    return (
        <ul className={`${style.ul} ${!isMenuOpen ? style.hidden : ""}`} >
            <li>Collections<div></div></li>
            <li>Men<div></div></li>
            <li>Women<div></div></li>
            <li>About<div></div></li>
            <li>Contact<div></div></li>
        </ul>
    )
}