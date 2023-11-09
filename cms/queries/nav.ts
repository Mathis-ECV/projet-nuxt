


  export default gql`
query nav{
    mainContent {
        titleSite
        linksMainNav {
          linksNavMain {
            ... on ArticleRecord {
              id
              articleTitle
            }
            ... on ContactRecord {
              id
              titre
              slugContact
            }
          }
        }
      }
}`

