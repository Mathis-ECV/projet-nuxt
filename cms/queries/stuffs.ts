  export default gql`
  query stuff_inferno_query{
    allStuffInfernos {
        stuffTitle
        stuffSide
        stuffType
        id
      }
      allStuffMirages {
        stuffType
        stuffTitle
        stuffSide
        stuffThrowing {
          stuffThrowingPositionY
          stuffThrowingPositionX
          stuffThrowingType
          stuffImageThrowingTop {
            url
          }
          stuffImageThrowingView {
            url
          }
          stuffImageThrowingViewZoom {
            url
          }
        }
        stuffLandingPositionY
        stuffLandingPositionX
        id
      }
  }`
  
  