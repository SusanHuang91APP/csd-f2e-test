import React, { useEffect } from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import type { TCategory } from "@/types/category.type";

interface BreadCrumbsProps {
  selectedCategories: TCategory[];
}
const BreadCrumbs: React.FC<BreadCrumbsProps> = React.memo(
  function BreadCrumbs({ selectedCategories }) {
    return (
      <React.Fragment>
        {selectedCategories.length > 0 && (
          <Breadcrumbs aria-label="breadcrumb">
            {selectedCategories.map((category, index) =>
              index < selectedCategories.length - 1 ? (
                <Link
                  key={category.Id}
                  color="inherit"
                  sx={{ textDecoration: "none" }}
                >
                  {category.Name}
                </Link>
              ) : (
                <Typography key={category.Id} color="text.primary">
                  {category.Name}
                </Typography>
              )
            )}
          </Breadcrumbs>
        )}
        {selectedCategories.length === 0 && (
          <Typography color={"inherit"}>尚未選擇分類</Typography>
        )}
      </React.Fragment>
    );
  },
  (prevProps, nextProps) => {
    if (
      prevProps.selectedCategories.length !==
      nextProps.selectedCategories.length
    ) {
      return false;
    } else {
      return prevProps.selectedCategories.every(
        (category, index) =>
          category.Id === nextProps.selectedCategories[index].Id
      );
    }
  }
);
export default BreadCrumbs;
