import React from "react"
import PropTypes from "prop-types"

import Header from "../Header"
import Footer from "../Footer"

import style from "./Layout.module.css"
import "../base.css"

const Layout = ({ children }) => {
  return (
    <div className={style.container}>
      <Header />
      <main className={style.mainContainer}>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
