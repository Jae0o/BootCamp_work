import "./Base.css";

const Base = ({ styleProp }) => {
  return (
    <div
      className="base"
      style={{ ...styleProp }}
    />
  );
};

export default Base;
