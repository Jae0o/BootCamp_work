const Board = ({ article }) => {
  return <ul>{article && article.map((arti) => <li key={arti}>{arti}</li>)}</ul>;
};

export default Board;
