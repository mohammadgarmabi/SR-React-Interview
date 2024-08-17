import React, { PropsWithChildren } from "react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

const AppThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const theme = createTheme({});

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
