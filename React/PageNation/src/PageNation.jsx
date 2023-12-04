import { useState } from "react";

const PageNation = ({ defaultPage, limit, total, onChange }) => {
  const [currentPage, setCurrentPage] = useState(defaultPage);

  const totalPage = Math.ceil(total / limit);

  const EventHandler = (newPage) => {
    setCurrentPage(newPage);
    onChange(newPage);
  };

  return (
    <>
      <button onClick={() => currentPage !== 0 && EventHandler(currentPage - 1)}>prev</button>
      {Array.from(new Array(totalPage), (_, i) => i)
        .filter((i) => {
          if (currentPage < 3) {
            return i < 5;
          } else if (currentPage > totalPage - 3) {
            return i >= totalPage - 5;
          }
          return i >= currentPage - 2 && i <= currentPage + 2;
        })
        .map((i) => (
          <button
            key={i}
            onClick={() => EventHandler(i)}
            style={{ backgroundColor: currentPage === i ? "red" : undefined }}>
            {i + 1}
          </button>
        ))}
      <button onClick={() => currentPage + 1 !== totalPage && EventHandler(currentPage + 1)}>
        next
      </button>
    </>
  );
};

export default PageNation;
