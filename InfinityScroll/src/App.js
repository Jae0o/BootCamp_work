import PostList from "./PostList";

const DUMMY = [
  {
    id: 1,
    imagePath:
      "https://s3.ap-northeast-2.amazonaws.com/kdt-cdn.roto.codes/cat-photos/20200428_052455.jpg",
    cats: "1, 2",
    created_at: "2021-08-22T12:13:26.364Z",
    updated_at: "2021-08-22T12:26:50.467Z",
    photo_in_cats: [
      {
        id: 1,
        name: "나나",
        colors: "yellow, white",
        birthday: null,
        profileImage:
          "https://s3.ap-northeast-2.amazonaws.com/kdt-cdn.roto.codes/cat-photos/20201217_012751.jpg",
        published_at: "2021-08-22T12:09:21.753Z",
        created_at: "2021-08-22T12:09:20.857Z",
        updated_at: "2021-08-22T12:11:16.963Z",
      },
      {
        id: 3,
        name: "모나",
        colors: "black, white",
        birthday: null,
        profileImage:
          "https://s3.ap-northeast-2.amazonaws.com/kdt-cdn.roto.codes/cat-photos/20210821_075630.jpg",
        published_at: "2021-08-22T12:09:49.615Z",
        created_at: "2021-08-22T12:09:48.793Z",
        updated_at: "2021-08-22T12:12:14.809Z",
      },
    ],
  },
  {
    id: 2,
    imagePath:
      "https://s3.ap-northeast-2.amazonaws.com/kdt-cdn.roto.codes/cat-photos/20201125_124829.jpg",
    cats: "3",
    created_at: "2021-08-22T12:13:49.601Z",
    updated_at: "2021-08-22T12:15:54.509Z",
    photo_in_cats: [
      {
        id: 3,
        name: "모나",
        colors: "black, white",
        birthday: null,
        profileImage:
          "https://s3.ap-northeast-2.amazonaws.com/kdt-cdn.roto.codes/cat-photos/20210821_075630.jpg",
        published_at: "2021-08-22T12:09:49.615Z",
        created_at: "2021-08-22T12:09:48.793Z",
        updated_at: "2021-08-22T12:12:14.809Z",
      },
    ],
  },
  {
    id: 3,
    imagePath:
      "https://s3.ap-northeast-2.amazonaws.com/kdt-cdn.roto.codes/cat-photos/20201209_135222.jpg",
    cats: "4",
    created_at: "2021-08-22T12:13:57.756Z",
    updated_at: "2021-08-22T12:15:59.167Z",
    photo_in_cats: [
      {
        id: 4,
        name: "레이",
        colors: "gray, white",
        birthday: null,
        profileImage:
          "https://s3.ap-northeast-2.amazonaws.com/kdt-cdn.roto.codes/cat-photos/20210814_144059.jpg",
        published_at: "2021-08-22T12:10:09.320Z",
        created_at: "2021-08-22T12:10:08.334Z",
        updated_at: "2021-08-22T12:11:39.119Z",
      },
    ],
  },
  {
    id: 4,
    imagePath:
      "https://s3.ap-northeast-2.amazonaws.com/kdt-cdn.roto.codes/cat-photos/20201217_012751.jpg",
    cats: "1",
    created_at: "2021-08-22T12:14:07.188Z",
    updated_at: "2021-08-22T12:16:03.066Z",
    photo_in_cats: [
      {
        id: 1,
        name: "나나",
        colors: "yellow, white",
        birthday: null,
        profileImage:
          "https://s3.ap-northeast-2.amazonaws.com/kdt-cdn.roto.codes/cat-photos/20201217_012751.jpg",
        published_at: "2021-08-22T12:09:21.753Z",
        created_at: "2021-08-22T12:09:20.857Z",
        updated_at: "2021-08-22T12:11:16.963Z",
      },
    ],
  },
  {
    id: 5,
    imagePath:
      "https://s3.ap-northeast-2.amazonaws.com/kdt-cdn.roto.codes/cat-photos/20210313_163131.jpg",
    cats: null,
    created_at: "2021-08-22T12:16:31.440Z",
    updated_at: "2021-08-22T12:16:31.449Z",
    photo_in_cats: [
      {
        id: 2,
        name: "차이",
        colors: "white, brown, black",
        birthday: null,
        profileImage:
          "https://s3.ap-northeast-2.amazonaws.com/kdt-cdn.roto.codes/cat-photos/20210313_163131.jpg",
        published_at: "2021-08-22T12:09:36.820Z",
        created_at: "2021-08-22T12:09:35.882Z",
        updated_at: "2021-08-22T12:12:38.734Z",
      },
    ],
  },
];

export default function App({}) {
  const titleElement = document.createElement("h1");
  titleElement.innerHTML = `photo's`;
  target.appendChild(titleElement);

  const postListElement = new PostList({
    target,
    state: DUMMY,
  });
}
