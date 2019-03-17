function getInstituteList() {
  return fetch('/api/v1/camp', {
    method: 'GET',
    mode: 'cors'
  }).then(response => response.json())
}

export default {
  getInstituteList
}
