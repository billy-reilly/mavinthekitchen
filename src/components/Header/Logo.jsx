import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./Logo.module.css"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressWpMedia(filter: { title: { eq: "logo" } }) {
        edges {
          node {
            localFile {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Img
      fixed={
        data.allWordpressWpMedia.edges[0].node.localFile.childImageSharp.fixed
      }
      className={styles.container}
      loading={`eager`}
      fadeIn={false}
      alt="Mav in the Kitchen Logo"
    />
  )
}

export default Image
