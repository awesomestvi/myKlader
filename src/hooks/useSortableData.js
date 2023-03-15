import React from "react";

const useSortableData = (items) => {
  const [sortConfig, setSortConfig] = React.useState();

  const sortedItems = React.useMemo(() => {
    if (!sortConfig?.direction) return items;
    if (sortConfig !== null) {
      items.sort((a, b) => {
        if (Number(a[sortConfig.key]) < Number(b[sortConfig.key])) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (Number(a[sortConfig.key]) > Number(b[sortConfig.key])) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }

    return items;
  }, [items, sortConfig]);

  const requestSort = (e) => {
    const [key, direction] = e.target.value.split(",");
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

export default useSortableData;
