
const BASE = 'https://fitnesstrac-kr.herokuapp.com/api'

export async function getUsers() {

    fetch(`${BASE}posts`)
    .then(response => response.json())
    .then(result => {
      return result;
    })
}
