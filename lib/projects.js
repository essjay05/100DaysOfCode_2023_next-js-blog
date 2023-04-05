// Trying to implement fetching data from my Joy OAT Projects API
export async function getProjectsData() {
  return new Promise (resolve => {
    fetch('https://find-your-joy-app.onrender.com/api/projects')
      .then(response => {
        console.log('fetch response from joy\'s projects api')
        console.log(response)
      })
      .catch(err => console.error(err))
  })
}