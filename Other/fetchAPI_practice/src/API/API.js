const API_END_POINT = 'https://kdt-frontend.programmers.co.kr'

export function requestAPI(url) {
  return fetch(`${API_END_POINT}${url.indexOf('/') === 0 ? url : `/${url}`}`)
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      throw new Error(`${res.status} Error`)
    })
    .catch((e) => console.log(e))
}

