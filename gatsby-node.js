/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWordpressPost(
        filter: { tags: { elemMatch: { name: { eq: "mitk_recipe" } } } }
        sort: { fields: date }
      ) {
        edges {
          node {
            title
            excerpt
            content
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.allWordpressPost.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/recipes.js`),
        context: {
          slug: node.slug,
        },
      })
    })
  })
}
