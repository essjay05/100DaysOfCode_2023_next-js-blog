import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
// import { getSortedPostsData } from '../lib/posts'
// import { getProjectsData } from '../lib/projects'

export default function Home({ projects }) {

  console.log('Index.js allProjectsData:')
  console.log(projects)

  const projectsData = projects.data

  // const projectsData = allProjectsData.data
  
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm a Joy-of-All-Trades former healthcare worker and theatre stage manager, turned software engineer.</p>
      </section>
      {/* Projects */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {projectsData.map((project) => {
            const { id, attributes } = {...project}
            const { name, description } = {...attributes}
            return (
              <li className={utilStyles.listItem} key={id}>
                <h3>{name}</h3>
                <p>{description}</p>
              </li>
            )
          })}
        </ul>
      </section>
      {/* Blog */}
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section> */}
    </Layout>
  )
}

export async function getStaticProps() {
  // const allPostsData = getSortedPostsData()
  const url = `https://find-your-joy-app.onrender.com/api/projects`
  const allProjectsData = await fetch(url)
  // const projectsJson = await allProjectsData.json()
  console.log('allProjectsData')
  console.log(allProjectsData)
  return {
    props: {
      projects: await allProjectsData.json()
    }
  }
}

