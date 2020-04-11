import React from "react"

import Logo from "./Logo"
import SiteTitle from "./SiteTitle"
// import NavBar from "./NavBar"

import style from "./Header.module.css"

export default function Header() {
  return (
    <header>
      <div className={style.container}>
        <div className={style.containerInner}>
          <Logo />
          <div className={style.content}>
            <SiteTitle />
            {/* <NavBar /> */}
          </div>
        </div>
      </div>
    </header>
  )
}
