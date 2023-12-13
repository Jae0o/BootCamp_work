import React, { useMemo, useState } from "react";
import TabItem from "./TabItem";

const Tab = ({ children, active, ...props }) => {
  const [currentActive, setCurruntActive] = useState(() => {
    if (active) {
      return active;
    } else {
      const index = React.Children.toArray(children).filter((element) => {
        if (React.isValidElement(element) && element.props.__TYPE === "Tab.Item") {
          return true;
        }

        console.log("Tab 오류임");
        return false;
      })[0].props.index;
      return index;
    }
  });

  const items = useMemo(() => {
    return React.Children.toArray(children)
      .filter((element) => {
        if (React.isValidElement(element) && element.props.__TYPE === "Tab.Item") {
          return true;
        }

        console.log("Tab 오류임");
        return false;
      })
      .map((element) => {
        return React.cloneElement(element, {
          ...element.props,
          key: element.props.index,
          active: element.props.index === currentActive,
          onClick: () => {
            setCurruntActive(element.props.index);
          },
        });
      });
  }, [children, currentActive]);

  const activeItem = useMemo(
    () => items.find((element) => currentActive === element.props.index),
    [currentActive, items]
  );

  return (
    <div>
      <div>{items}</div>
      <div>{activeItem.props.Children}</div>
    </div>
  );
};

Tab.Item = TabItem;

export default Tab;
