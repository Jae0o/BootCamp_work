const Text = ({ children, size, strong, underline, delete: del, ...props }) => {
  const fontStyle = {
    fontWeight: strong ? "bold" : undefined,
    fontSize: size,
    textDecoration: underline ? "underline" : undefined,
  };

  if (del) {
    children = <del>{children}</del>;
  }

  return (
    <div
      style={{ ...props.style, ...fontStyle }}
      {...props}>
      {children}
    </div>
  );
};

export default Text;
