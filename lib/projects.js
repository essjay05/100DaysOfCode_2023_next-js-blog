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