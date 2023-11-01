const API_KEY = "https://todo-api.roto.codes/roto";

export const request = async (url, options) => {
  try {
    const res = await fetch(`${API_KEY}${url}`, options);

    if (!res.ok) {
      throw new Error("API 호출 오류 났지롱");
    }

    return res.json();
  } catch (e) {
    console.log(e.message);
  }
};
