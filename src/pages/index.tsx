import Layout from "@/components/layout";
import MultiLevelMenu from "@/components/multiLevelMenu";
import { Box, Breadcrumbs, Typography, Paper, Link } from "@mui/material";
import { TCategory } from "@/types/category.type";
import React, { useState } from "react";

export default function Home() {
  const [selectedCategories, setSelectedCategories] = useState<TCategory[]>([]);

  const handleSelectMenu = (categories: TCategory[]) => {};

  return (
    <Layout>
      <Typography variant="h5" component="div" sx={{ mb: 1 }}>
        請先查看並操作實際範例：
      </Typography>
      <Box sx={{ mb: 4 }}>
        <Link href="https://csd-f2e-test-answer.vercel.app/">
          https://csd-f2e-test-answer.vercel.app/
        </Link>
      </Box>

      <Typography variant="h5" component="div" sx={{ mb: 1 }}>
        需求1：請依照 Api Response 實作多層分類選單元件(MultiLevelMenu)
      </Typography>
      <Typography
        variant="body1"
        component="div"
        color="secondary"
        sx={{ mb: 2 }}
      >
        1、不用在乎 UI 呈現，只需完成資料串接、選單點選互動即可
        <br />
        2、或可直接使用裝好的 Material UI 實作
      </Typography>

      <Paper sx={{ mb: 4 }}>
        <MultiLevelMenu onSelect={handleSelectMenu} />
      </Paper>

      <Typography variant="h5" component="div" sx={{ mb: 2 }}>
        需求2：請依分類選擇呈現多層選單路徑
      </Typography>
      <Box>
        {selectedCategories.length > 0 ? (
          <React.Fragment>
            {/* TODO: 需求2：請依分類選擇呈現多層選單路徑 */}
          </React.Fragment>
        ) : (
          <Typography color={"inherit"}>尚未選擇分類</Typography>
        )}
      </Box>
    </Layout>
  );
}
