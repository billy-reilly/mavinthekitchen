import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import style from "./SiteTitle.module.css"

const SiteTitle = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const titleWords = data.site.siteMetadata.title.split(" ")

  return (
    <h1 className={style.title}>
      <Link to="/" className={style.link}>
        <span className={style.primaryTitle}>{titleWords[0]}</span>
        <span className={style.secondaryTitle}>
          {titleWords.slice(1).join(" ")}
        </span>
      </Link>
    </h1>
  )
}

export default SiteTitle
