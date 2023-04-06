import Layout from '../../components/layout'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import { getAllProjectIds, getSingleProjectData } from '../../lib/projects'

export async function getStaticProps({ params }) {
  const projectData = await getSingleProjectData(params.id)
  return {
    props: {
      projectData,
    }
  }
}

export async function getStaticPaths() {
  const paths = await getAllProjectIds()
  return {
    paths,
    fallback: false,
  }
}

export default function Project({ projectData }) {
  
  const { attributes } = {...projectData.data}
  const { name, description, createdAt, deployedUrl, githubUrl, techUsed } = {...attributes}

  return (
    <Layout>
      <Head>
        <title>{ name }</title>
      </Head>
      <h2 className={utilStyles.headingLg}>Project: { name }</h2>
      <p>{ description }</p>
      <ul>
        <li>
          <strong>Tech Used: </strong>{ techUsed }
        </li>
        <li>
          <strong>Demo Url: </strong>
          <a target='_blank' href={ deployedUrl }>{ deployedUrl }</a>
        </li>
        <li>
          <strong>Github Url: </strong>
          <a target='_blank' href={ githubUrl }>{ githubUrl }</a>
        </li>
      </ul>
    </Layout>
  )
}