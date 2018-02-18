require('dotenv').config();

const Post = require('./src/models/post');
const { getPath } = require('./src/utils');


module.exports = {
  siteMetadata: {
    url: 'https://livvy.byb.kr',
    title: '현지와 용배의 블로그',
    subtitle: '현지와 용배가 만들어가는 블로그입니다.',
    copyright: '© 2017-2018 livvy & ybbarng All rights reserved.',
    disqusShortname: 'blog-of-livvy-and-ybbarng',
    menu: [
      {
        label: 'Home',
        path: '/'
      },
      {
        label: '잡담',
        path: '/categories/smalltalk'
      },
      {
        label: '공부',
        path: '/categories/study'
      },
      {
        label: '같이 놀기',
        path: '/categories/date'
      }
    ],
    group: {
      name: '현지 & 용배'
    },
    authors: [
      {
        id: 'livvy',
        name: '현지',
        about: '/pages/about-livvy',
        github: '#',
        email: '#',
        keybase: '#',
        facebook: '#',
        twitter: '#',
        rss: '#'
      },
      {
        id: 'ybbarng',
        name: '용배',
        about: '/pages/about-ybbarng',
        github: '#',
        email: '#',
        keybase: '#',
        facebook: '#',
        twitter: '#',
        rss: '#'
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || '',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || ''
      }
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description: subtitle
                site_url: url
                copyright
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allContentfulPost } }) => (
              allContentfulPost.edges.map(edge =>
                Object.assign({}, edge.node, {
                  description: edge.node.description ? edge.node.description.description : '',
                  date: edge.node.datetime,
                  author: edge.node.author ? edge.node.author.name : '',
                  url: site.siteMetadata.site_url + getPath(Post, edge.node.slug),
                  guid: site.siteMetadata.site_url + getPath(Post, edge.node.slug),
                  custom_elements: [{ 'content:encoded': edge.node.body.childMarkdownRemark.html }]
                })
              )
            ),
            query: `
              {
                allContentfulPost(
                  limit: 1000,
                  sort: { order: DESC, fields: [datetime] }
                ) {
                  edges {
                    node {
                      title
                      slug
                      datetime
                      author {
                        name
                      }
                      description {
                        description
                      }
                      body {
                        childMarkdownRemark {
                          html
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml'
          }
        ]
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false
            }
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem'
            }
          },
          'gatsby-remark-prismjs',
          // 'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-emoji'
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-93238645-3'
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
            {
              site {
                siteMetadata {
                  url
                }
              }
              allSitePage(
                filter: {
                  path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" }
                }
              ) {
                edges {
                  node {
                    path
                  }
                }
              }
          }`,
        output: '/sitemap.xml',
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map((edge) => {
            return {
              url: site.siteMetadata.url + edge.node.path,
              changefreq: 'daily',
              priority: 0.7
            };
          })
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss-sass'
  ]
};
