const API_KEY = "https://kdt-frontend.programmers.co.kr";
export async function request(url) {
  try {
    const res = await fetch(`${API_KEY}${url}`);

    if (!res.ok) {
      throw new Error("호출 실패");
    }

    return await res.json();
  } catch (e) {
    console.log("Error");
  }
}
