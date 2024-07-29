import React, { useState, useEffect } from "react";
import { TCategory } from "@/types/category.type";

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

const MultiLevelMenu: React.FC<MultiLevelMenuProps> = ({ onSelect }) => {
  const [categories, setCategories] = useState<TCategory[]>([]);

  useEffect(() => {
    fetchCategories().then((data) => setCategories(data || []));
  }, []);

  return (
    <React.Fragment>
      {/* TODO: 需求1：請依照 Api Response 實作多層分類選單元件(MultiLevelMenu) */}
    </React.Fragment>
  );
};

export default MultiLevelMenu;
