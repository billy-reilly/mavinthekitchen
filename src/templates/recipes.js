import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    allWordpressPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
        }
      }
    }
  }
`

export default ({ data }) => {
  const post = data.allWordpressPost.edges[0].node
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </Layout>
  )
}
