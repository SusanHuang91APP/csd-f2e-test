import React, { useState, useEffect, useCallback } from "react";
import { TCategory } from "@/types/category.type";
import SingleLevelMenu from "@/components/multiLevelMenu/singleLevelMenu";
import { Box, MenuList, Paper } from "@mui/material";
const fetchCategories = async () => {
  try {
    const response = await fetch("/api/categories");
    const data: {
      data: TCategory[];
    } = await response.json();

    return data.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};

interface MultiLevelMenuProps {
  onSelect: (categories: TCategory[]) => void;
}
const findCategoryById = (
  categories: TCategory[],
  id: number
): TCategory | null => {
  for (const category of categories) {
    //從categories第一層開始找是否符合傳入的parentId
    if (category.Id === id) {
      return category;
    }
    //不符合就從ChildList開始遞迴找
    const childCategory = findCategoryById(category.ChildList, id);
    if (childCategory) {
      return childCategory;
    }
  }
  return null;
};

const getCategoryAncestors = (
  categories: TCategory[],
  category: TCategory
): TCategory[] => {
  const ancestors: TCategory[] = [];
  let currentCategory: TCategory | null = category;

  //如果點擊的是第二層之後
  while (currentCategory && currentCategory.Level > 1) {
    ancestors.unshift(currentCategory);
    currentCategory = findCategoryById(categories, currentCategory.ParentId);
  }
  //如果點擊的是第一層
  if (currentCategory) {
    ancestors.unshift(currentCategory);
  }
  return ancestors;
};
// const MultiLevelMenu: React.FC<MultiLevelMenuProps> = ({ onSelect }) => {
//   const [categories, setCategories] = useState<TCategory[]>([]);
//   const [openCategories, setOpenCategories] = useState<number[]>([]);
//   const handleClickCategory = useCallback(
//     (categories: TCategory[]) => {
//       const openedIds = categories.map((item) => item.Id);
//       setOpenCategories(openedIds);
//       onSelect(categories);
//     },
//     [setOpenCategories, onSelect]
//   );
//   useEffect(() => {
//     fetchCategories().then((data) => setCategories(data || []));
//   }, []);
//   {
//     /* TODO: 需求1：請依照 Api Response 實作多層分類選單元件(MultiLevelMenu) */
//   }
//   return (
//     <MenuList>
//       {categories.map((category) => (
//         <SingleLevelMenu
//           key={category.Id}
//           category={category}
//           parentCategories={[]}
//           openCategories={openCategories}
//           onClickCategory={handleClickCategory}
//         />
//       ))}
//     </MenuList>
//   );
// };

const MultiLevelMenu: React.FC<MultiLevelMenuProps> = ({ onSelect }) => {
  const [categories, setCategories] = useState<TCategory[]>([]);
  const [openCategories, setOpenCategories] = useState<number[]>([]);

  const handleClickCategory = useCallback(
    (category: TCategory) => {
      const ancestors = getCategoryAncestors(categories, category);
      onSelect(ancestors);
      const openedIds = ancestors.map((item) => item.Id);
      setOpenCategories(openedIds);
    },
    [setOpenCategories, onSelect, categories]
  );
  useEffect(() => {
    fetchCategories().then((data) => setCategories(data || []));
  }, []);
  {
    /* TODO: 需求1：請依照 Api Response 實作多層分類選單元件(MultiLevelMenu) */
  }
  return (
    <MenuList>
      {categories.map((category) => (
        <SingleLevelMenu
          key={category.Id}
          category={category}
          onClickCategory={handleClickCategory}
          openCategories={openCategories}
        />
      ))}
    </MenuList>
  );
};

export default MultiLevelMenu;

/*

*/
