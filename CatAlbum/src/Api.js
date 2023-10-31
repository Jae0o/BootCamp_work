const API_END = "https://kdt-frontend.cat-api.programmers.co.kr";

export const request = async (url) => {
  try {
    const res = await fetch(`${API_END}${url}`);
    if (!res.ok) {
      throw new Error("API 호출 에러");
    }

    return await res.json();
  } catch (e) {
    alert(e.message);
  }
};
