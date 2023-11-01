const END_POINT =
  "https://kdt-frontend.cat-search-api.programmers.co.kr/api/cats";

export const request = async (url) => {
  try {
    const res = await fetch(`${END_POINT}${url}`);

    if (!res.ok) {
      throw new Error("호출 에러");
    }

    return res.json();
  } catch (e) {
    console.log(e.message);
  }
};
