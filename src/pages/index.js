import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import InstaRail from "../components/InstaRail"

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPage(filter: { title: { eq: "About" } }) {
        edges {
          node {
            id
            content
          }
        }
      }
      allWordpressPost(
        filter: { tags: { elemMatch: { name: { eq: "mitk_recipe" } } } }
        sort: { fields: date }
      ) {
        edges {
          node {
            id
            title
            excerpt
            content
            slug
          }
        }
      }
    }
  `)
  const aboutContent = data.allWordpressPage.edges[0].node.content

  const recipes = data.allWordpressPost.edges.map(
    ({ node: { id, title, excerpt, content, slug } }) => ({
      id,
      title,
      excerpt,
      content,
      slug,
    })
  )

  return (
    <Layout>
      <SEO title="Home" />
      <InstaRail />
      <div dangerouslySetInnerHTML={{ __html: aboutContent }} />
      <h2>Recipes</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <Link to={`/${recipe.slug}`}>
              <h3>{recipe.title}</h3>
            </Link>
            <div dangerouslySetInnerHTML={{ __html: recipe.excerpt }} />
          </li>
        ))}
      </ul>
    </Layout>
  )
}
