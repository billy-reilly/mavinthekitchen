import React from "react"

import style from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={style.container}>
      <div className={style.content}>
        <p className={style.copyright}>
          © mavinthekitchen {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
