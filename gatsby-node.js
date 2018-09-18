const path = require ('path');
// const data = require('src/data/posts.json');

exports.createPages = ({actions, graphql}) => {
    const {createPage} = actions

    const postTemplate = path.resolve('src/Templates/blog-post.js');

    return graphql(`
    {
        allEnglish {
            edges {
              node {
                display
                bookId
                bookName
                ref
                prevPath
                path
                nextPath
                title
                html
                questionsTitle
                Question1
                Question2
                Question3
                Question4
              }
            }
          }
      }
    `).then(res => {
        if(res.errors) {
            return Promise.reject(res.errors)
        }

        res.data.allEnglish.edges.forEach(({node}) => {
            createPage({
                path: node.path,
                component: postTemplate,
            })
        })
    })
}