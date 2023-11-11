  export default gql`
  query stuff_inferno_query{
    allStuffInfernos {
        stuffType
        stuffTitle
        stuffSide
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
    }
  }`
  
  