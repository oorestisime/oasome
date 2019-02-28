import React, { Component, Fragment, useState, useContext } from "react"
import _ from "lodash"
import { graphql, navigate } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import { Box, Heading, Anchor, Text } from "grommet"
import { MapLocation, Car, Globe, Schedule } from "grommet-icons"
import { ResponsiveContext } from "grommet"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"

import App from "../components/layout"
import Posts from "../components/posts"
import Map from "../components/map"
import Section from "../components/section"
import Seo from "../components/seo"
import { flatten, groupBy, coordinates, calculateTotals } from "../tools"

const Stat = ({ title, icon: Icon, counter }) => (
  <Box margin="none" align="center">
    <Icon size="xlarge" />
    <Heading level="4">{title}</Heading>
    {counter}
  </Box>
)

const Sensor = ({ onChange, children }) => {
  const size = useContext(ResponsiveContext)
  if (size === `small`) {
    return null
  }
  // TODO improve this to be more modular
  // Receive an object with the info and recreate the stats etc
  return (
    <VisibilitySensor
      onChange={e => onChange(e)}
      offset={{ top: 10 }}
      delayedCall
    >
      {children}
    </VisibilitySensor>
  )
}

const Index = ({ data }) => {
  const [didViewCountUp, setViewCountUp] = useState(false)
  const { edges: posts } = data.allMarkdownRemark
  const nodes = flatten(posts)
  const { [true]: featured, [null]: latest } = groupBy(nodes, `featured`)
  const coords = coordinates(nodes)
  const totals = calculateTotals(nodes)
  const countries = _.uniq(nodes.map(post => post.frontmatter.country)).length

  return (
    <>
      <Seo postImage={data.file.childImageSharp.fluid.src} />
      <App>
        <Section title="Featured articles">
          <Posts posts={featured} />
        </Section>
        <Sensor onChange={setViewCountUp}>
          <Section
            size={useContext(ResponsiveContext)}
            title="Our trips in numbers"
            background="light-4"
          >
            <Box
              justify="between"
              width="xxlarge"
              direction="row-responsive"
              pad={{ horizontal: `xlarge`, vertical: `small` }}
            >
              <Stat
                icon={Car}
                title="Distance covered"
                counter={
                  <CountUp
                    duration={2}
                    start={0}
                    end={didViewCountUp ? totals.km : 0}
                    suffix=" km"
                  />
                }
              />
              <Stat
                icon={Schedule}
                title="Duration"
                counter={
                  <CountUp
                    duration={2}
                    start={0}
                    end={didViewCountUp ? totals.duration : 0}
                    suffix=" days"
                  />
                }
              />
              <Stat
                icon={Globe}
                title="Countries"
                counter={
                  <CountUp
                    duration={2}
                    start={0}
                    end={didViewCountUp ? countries : 0}
                  />
                }
              />
              <Stat
                icon={MapLocation}
                title="Destinations"
                counter={
                  <CountUp
                    duration={2}
                    start={0}
                    end={didViewCountUp ? totals.stops : 0}
                    suffix=" stops"
                  />
                }
              />
            </Box>
          </Section>
        </Sensor>
        <Section title="Where we have been!">
          <Map cities={coords} />
        </Section>
        <Section
          background="light-3"
          title="Hello there, we are A and O"
          pad={{ horizontal: `xlarge`, vertical: `small` }}
        >
          <Box direction="row-responsive" margin="medium">
            <Box align="center" basis="3/4">
              <Text size="large">
                Welcome to the OAsome blog.
                <br />
                This is a travel blog of a couple who guess what … their
                initials start with an O and an A. They both really like
                travelling new places, finding out interesting adventures and
                take casual photos.
                <br />
                <br />
                This blog also gives an area for friends to share some of their
                experiences or handful trips that they found out during their
                travel experiences!
                <br />
                <br />
                Would you like to take a stroll around the OAsome world?
                <br />
                <br />
                Then, follow along on our short adventures as we capture the
                planet!
                <Anchor
                  onClick={() => navigate(`/about`)}
                  label=" Read more"
                  size="medium"
                  color="neutral-3"
                />
              </Text>
            </Box>
            <Box align="stretch" basis="1/4">
              <Img fluid={data.file.childImageSharp.fluid} alt="Logo" />
            </Box>
          </Box>
        </Section>
        <Section title="Latest articles">
          <Posts posts={latest.slice(0, 4)} />
        </Section>
      </App>
    </>
  )
}

Index.propTypes = {
  data: PropTypes.shape().isRequired,
}

export const pageQuery = graphql`
  query IndexQuery {
    file(relativePath: { eq: "about/up.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { in: ["photo", "article"] } } }
    ) {
      edges {
        node {
          id
          timeToRead
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            km
            featured
            itinerary
            duration
            coordinates {
              country
              coordinates
            }
            country
            cover {
              childImageSharp {
                fluid(maxHeight: 200, maxWidth: 300, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Index
