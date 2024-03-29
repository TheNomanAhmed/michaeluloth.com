// See: https://www.gatsbyjs.org/blog/2019-02-20-introducing-use-static-query/

function useSiteMetadata() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            jobTitle
            description
            siteUrl
            lang
            locale
            email
            telephone
            address {
              street
              locality
              region
              postalCode
              country
            }
            socialLinks
            structuredDataType
            twitterSite
            twitterCreator
            facebookAppId
            googleSiteVerification
            blogPage {
              title
              description
              url
            }
            operaPage {
              title
              description
              url
            }
            websitesPage {
              title
              description
              url
            }
          }
        }
      }
    `
  )

  return site.siteMetadata
}

///////////////////////////////////////////////////////////////////////////////////

import { useStaticQuery, graphql } from 'gatsby'

export default useSiteMetadata

/*

import useSiteMetadata from '../data/useSiteMetadata'

const { title } = useSiteMetadata()

*/
