import { useState } from "react";

function useSidebar({ defaultPath = "" } = {}) {
  const [selectedItem, setSelectedItem] = useState({
    path: defaultPath,
  });

  const isActive = (path) => selectedItem.path === path;

  const onMenuItemClicked = (path = {}) => {
    const newItem = {
      path,
    };

    if (isActive(path)) {
      newItem.path = selectedItem.path;
    }

    return setSelectedItem(newItem);
  };

  return {
    isActive,
    onMenuItemClicked,
  };
}

export default useSidebar;
