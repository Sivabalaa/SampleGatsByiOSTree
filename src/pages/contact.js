import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import config from '../../config';

//images
import gitHub from './icons/github.png'
import email from './icons/email.png'
import linkedIn from './icons/linkedIn.png'

const ContactPage = ({
  data: {
    site
  },
}) => {
    console.log(gitHub)
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/contactPage.jpg')`, marginBottom: 0}}>
          <h1 className="post-title">Get in Touch</h1>
        </div>
        <div>
           <h1>{config.authorName}</h1>
            <p>{config.authorHeading}</p>
      <div className="contact-social-row">
            <div className="contact-social-column">
                <a href={config.authorSocialLinks[0].url} target= "_blank">
                <span><img src={gitHub} width="64" height="64"/></span>
                </a>
            </div>
            <div className="contact-social-column">
                <a href={config.authorSocialLinks[1].url} target= "_blank">
                <span><img src={linkedIn} width="64" height="64"/></span>
                </a>
            </div>
            <div className="contact-social-column">
                <a href={config.authorSocialLinks[2].url} target= "_blank">
                <span><img src={email} width="64" height="64"/></span>
                </a>
            </div>
          </div>  
    </div>
      </div>
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`