import Upload from "../components/Upload";

export default {
  title: "Component/Upload",
  component: Upload,
};

export const Default = (args) => {
  return (
    <Upload {...args}>
      <button>Click Me!!</button>
    </Upload>
  );
};

export const AccessFile = (args) => {
  return (
    <Upload {...args}>{(file) => <button>{file ? file.name : `Click Me!!!!`}</button>}</Upload>
  );
};

export const Droppable = (args) => {
  return (
    <Upload
      {...args}
      droppable>
      {(file, dragging) => (
        <div
          style={{
            width: 300,
            height: 100,
            border: "4px dashed #aaa",
            borderColor: dragging ? "black" : "#aaa",
          }}>
          {file ? file.name : "click or drag file to this area to upload."}
        </div>
      )}
    </Upload>
  );
};
