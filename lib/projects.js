// Trying to implement fetching data from my Joy OAT Projects API
export async function getProjectsData() {
  try {
    const projectsData = await fetch('https://find-your-joy-app.onrender.com/api/projects')
    const projectsJson = await projectsData.json()
    return projectsJson
  } catch(err) {
    console.log('Error retrieving projects api data.')
    console.error(err)
  }
}

// Get projectIds array for staticPaths needs to have array of object with params and ids
export async function getAllProjectIds() {
  try {
    const allProjects = await getProjectsData()
    const allProjectsData = allProjects.data
    const projectIdPaths = await allProjectsData.map((project) => {
      return {
        params: {
          id: `${project.id}`
        }
      }
    })
    return projectIdPaths
    
  } catch(err) {
    console.log('Error getting projectIdPaths array')
  }
}

// Trying to implement fetching data from my Joy OAT Projects API
export async function getSingleProjectData(projectId) {
  try {
    const projectData = await fetch(`https://find-your-joy-app.onrender.com/api/projects/${projectId}`)
    const projectJson = await projectData.json()
    return projectJson
  } catch(err) {
    console.log('Error retrieving projects api data.')
    console.error(err)
  }
}