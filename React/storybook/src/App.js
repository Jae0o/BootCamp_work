import { Route, Routes } from "react-router-dom";
import { PostDetailPage, PostPage } from "./Pages";
import DefaultTemplate from "./Todo-axios/Components/template/DefaultTemplate.js";

function App() {
  return (
    <DefaultTemplate>
      <Routes>
        <Route
          path="/"
          element={<h1>HOME</h1>}
        />
        <Route
          path="/posts"
          element={<PostPage />}
        />
        <Route
          path="/posts/:id"
          element={<PostDetailPage />}
        />
      </Routes>
    </DefaultTemplate>
  );
}

export default App;
