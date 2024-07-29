import React, { PropsWithChildren } from "react";
import { Box, Container } from "@mui/material";

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <Box padding="20px">
      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
}
