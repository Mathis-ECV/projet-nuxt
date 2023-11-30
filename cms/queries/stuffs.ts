export default gql`
  query stuff_inferno_query{
    allStuffInfernos {
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
      }
      stuffLandingPositionY
      stuffLandingPositionX
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
        }
        stuffLandingPositionY
        stuffLandingPositionX
        id
      }
  }`

