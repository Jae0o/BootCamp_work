import React from "react";

const AvatarGroup = ({ children, shape = "circle", size = 70, ...props }) => {
  const avatarrs = React.Children.toArray(children)
    .filter((el) => {
      if (React.isValidElement(el)) {
        return true;
      }
      return false;
    })
    .map((avatar, index, avatars) => {
      return React.cloneElement(avatar, {
        ...avatar.props,
        size,
        shape,
        style: {
          ...avatar.props.style,
          marginLeft: -size / 5,
        },
      });
    });

  return <div>{avatarrs}</div>;
};

export default AvatarGroup;
