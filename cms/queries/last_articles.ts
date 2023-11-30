export default gql`
query Articles{
    allArticles(first: 3) {
        title
        id
        articleUrl
        thumbnailArticle {
            url
          }
          contenuArticle {
            value
          }
      }
}`;