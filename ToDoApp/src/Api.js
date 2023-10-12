export const API_END_POINT = 'https://kdt-frontend.todo-api.programmers.co.kr'

export async function requset(url, options = {}) {
  try {
    const res = await fetch(`${API_END_POINT}${url}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (res.ok) {
      const json = res.json()
      return json
    }
    throw new Error('API 호출 error')
  } catch (e) {
    alert(e.message)
  }
}
