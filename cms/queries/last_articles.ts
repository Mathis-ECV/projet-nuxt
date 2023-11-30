export default gql`
query Articles{
    allArticles(first: 3) {
        title
        id
        thumbnailArticle {
            url
          }
          contenuArticle {
            value
          }
          articleSlug {
            title
          }
      }
}`;