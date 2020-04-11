import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./InstaRail.module.css"

export default function InstaRail() {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode(limit: 3) {
        edges {
          node {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  `)

  const images = data.allInstaNode.edges.map(
    imageData => imageData.node.localFile.childImageSharp
  )

  // TODO: only show two images on mobile viewports

  return (
    <div className={styles.container}>
      {images.map(image => (
        <div className={styles.gridItem}>
          <Img fluid={image.fluid} className={styles.gatsbyImageWrapper} />
        </div>
      ))}
    </div>
  )
}
