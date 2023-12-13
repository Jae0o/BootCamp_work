import React from "react";
import BreadCrumbItem from "./BreadCrumbItem";

const BreadCrumb = ({ children, ...props }) => {
  const containerStyle = {
    display: "inline-block",
  };

  const items = React.Children.toArray(children)
    .filter((element) => {
      if (React.isValidElement(element) && element.props.__TYPE === "BreadCrumbItem") {
        return true;
      }

      console.warn("Only Accepts BreadCrumb.Item as it's ");
      return false;
    })
    .map((element, index, elements) => {
      return React.cloneElement(element, {
        ...element.props,
        active: index === elements.length - 1,
      });
    });

  return <nav style={{ ...containerStyle }}>{items}</nav>;
};

BreadCrumb.Item = BreadCrumbItem;

export default BreadCrumb;
