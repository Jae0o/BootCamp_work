import Box from "./Box";

const Paragraph = ({ line = 3, ...props }) => {
  return (
    <div {...props}>
      {Array.from(Array(line), (_, index) => (
        <Box
          width="100%"
          height={16}
          key={index}
        />
      ))}
    </div>
  );
};

export default Paragraph;
