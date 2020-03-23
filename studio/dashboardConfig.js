export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e786189ab731b810380b223',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-w3pwtnx1',
                  apiId: 'bc8f396a-7941-410b-a84c-1e57fca9fc65'
                },
                {
                  buildHookId: '5e786189e264944e85e91616',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-z2pue7uu',
                  apiId: '13fb301a-e984-49b0-85b3-0a9360ad4a48'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/amarjeet97/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-z2pue7uu.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
