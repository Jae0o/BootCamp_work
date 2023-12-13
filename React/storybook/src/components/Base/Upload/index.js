import { useRef, useState } from "react";
import "./index.css";

const Upload = ({ children, droppable, name, accept, value, onChange, ...props }) => {
  const [file, setFile] = useState(value);
  const [dragging, setDragging] = useState(false);

  const inputRef = useRef(null);

  const handleChooseFile = () => {
    inputRef.current.click();
  };

  const handelFileChange = (e) => {
    const file = e.target.files;
    const changeFile = file[0];
    setFile(changeFile);
    onChange && onChange(changeFile);
  };

  const handleDragEnter = (e) => {
    if (!droppable) return;

    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDragging(true);
    }
  };
  const handleDragLeave = (e) => {
    if (!droppable) return;

    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };
  const handleDragOver = (e) => {
    if (!droppable) return;

    e.preventDefault();
    e.stopPropagation();
  };
  const handleFileDrop = (e) => {
    if (!droppable) return;

    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    const changeFile = files[0];
    setFile(changeFile);
    onChange && onChange();
    setDragging(false);
  };

  return (
    <div
      className="upload-container "
      onClick={handleChooseFile}
      onDrop={handleFileDrop}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      {...props}>
      <input
        className="upload-input"
        ref={inputRef}
        name={name}
        accept={accept}
        onChange={handelFileChange}
        type="file"
      />
      {typeof children === "function" ? children(file, dragging) : children}
    </div>
  );
};

export default Upload;
