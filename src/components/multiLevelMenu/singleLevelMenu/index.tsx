import type { TCategory } from "@/types/category.type";
import React, { FC, useEffect, useState } from "react";
import { MenuItem, Collapse, List, ListItemText, Box } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

// type SingleLevelMenuProps = {
//   category: TCategory;
//   parentCategories: TCategory[];
//   openCategories: number[];
//   onClickCategory: (categories: TCategory[]) => void;
// };
// const SingleLevelMenu: FC<SingleLevelMenuProps> = React.memo(
//   function SingleLevelMenu({
//     category,
//     parentCategories,
//     openCategories,
//     onClickCategory,
//   }) {
//     const isOpen = openCategories.includes(category.Id);
//     const handleClick = () => {
//       onClickCategory([...parentCategories, category]);
//     };
//     return (
//       <Box>
//         <MenuItem
//           onClick={handleClick}
//           sx={{
//             pl: category.Level * 2,
//           }}
//         >
//           <ListItemText primary={category.Name} />
//           {category.ChildListCount > 0 ? (
//             isOpen ? (
//               <ExpandLess />
//             ) : (
//               <ExpandMore />
//             )
//           ) : null}
//         </MenuItem>
//         {category.ChildListCount > 0 && (
//           <Collapse in={isOpen} timeout="auto" unmountOnExit>
//             <List component="div" disablePadding>
//               {category.ChildList.map((child) => (
//                 <SingleLevelMenu
//                   key={child.Id}
//                   category={child}
//                   parentCategories={[...parentCategories, category]}
//                   openCategories={openCategories}
//                   onClickCategory={onClickCategory}
//                 />
//               ))}
//             </List>
//           </Collapse>
//         )}
//       </Box>
//     );
//   },
//   (prevProps, nextProps) => {
//     return (
//       prevProps.openCategories.length === nextProps.openCategories.length &&
//       prevProps.openCategories.every(
//         (Id, index) => Id === nextProps.openCategories[index]
//       ) &&
//       prevProps.category.Id === nextProps.category.Id &&
//       prevProps.parentCategories === nextProps.parentCategories &&
//       prevProps.onClickCategory === nextProps.onClickCategory
//     );
//   }
// );

type SingleLevelMenuProps = {
  category: TCategory;
  onClickCategory: (category: TCategory) => void;
  openCategories: number[];
};
const SingleLevelMenu: FC<SingleLevelMenuProps> = React.memo(
  function SingleLevelMenu({ category, onClickCategory, openCategories }) {
    const isOpen = openCategories.includes(category.Id);
    const handleClick = () => {
      onClickCategory(category);
    };
    return (
      <Box>
        <MenuItem
          onClick={handleClick}
          sx={{
            pl: category.Level * 2,
          }}
        >
          <ListItemText primary={category.Name} />
          {category.ChildListCount > 0 ? (
            isOpen ? (
              <ExpandLess />
            ) : (
              <ExpandMore />
            )
          ) : null}
        </MenuItem>
        {category.ChildListCount > 0 && (
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {category.ChildList.map((child) => (
                <SingleLevelMenu
                  key={child.Id}
                  category={child}
                  onClickCategory={onClickCategory}
                  openCategories={openCategories}
                />
              ))}
            </List>
          </Collapse>
        )}
      </Box>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.openCategories.length === nextProps.openCategories.length &&
      prevProps.openCategories.every(
        (Id, index) => Id === nextProps.openCategories[index]
      ) &&
      prevProps.category.Id === nextProps.category.Id &&
      prevProps.onClickCategory === nextProps.onClickCategory
    );
  }
);

export default SingleLevelMenu;
