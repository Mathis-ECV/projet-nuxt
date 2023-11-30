export default gql`
query Articles{
    allArticles{
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