import { useState } from "react";
import PageNation from "./PageNation";
import Board from "./Board";

function App() {
  const [page, setPage] = useState(0);
  const postList = Array.from(
    { length: 101 },
    (_, index) => `현재 게시글은 ${index}번째 게시글 입니다`
  );

  const limit = 10;
  const offset = page * limit;
  return (
    <>
      <PageNation
        defaultPage={1}
        limit={limit}
        total={postList.length}
        onChange={(e) => setPage(e)}
      />
      <Board article={postList.slice(offset, offset + limit)} />
    </>
  );
}

export default App;
