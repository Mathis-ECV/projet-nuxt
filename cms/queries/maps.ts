
  export default gql`
  query maps_query{
    allMaps {
        mapTitle
        mapThumbnail {
          url
        }
        mapTopView {
          url
        }
        mapSlug
      }
  }`
  
  