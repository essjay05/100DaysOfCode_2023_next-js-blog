import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import { getProjectsData } from '../lib/projects'

export default function Home({ projects, posts }) {

  const projectsData = projects.data
  
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
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <ul className={utilStyles.list}>
          {projectsData.map((project) => {
            const { id, attributes } = {...project}
            const { name, description } = {...attributes}
            return (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/projects/${id}`}>
                  <h3>{name}</h3>
                </Link>
                <p>{description}</p>
              </li>
            )
          })}
        </ul>
      </section>
      <hr/>
      {/* Blog */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {posts.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData()
  const libProjectsData = await getProjectsData()
  
  return {
    props: {
      posts: allPostsData,
      projects: libProjectsData
    }
  }
}

