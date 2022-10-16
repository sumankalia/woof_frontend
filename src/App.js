import React, { useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Router from "./router";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategories } from "./redux/actions/categories";
import SnackBarComponent from "./components/SnackbarComponent";

const sections = [{ title: "All Pets", url: "/" }];

const theme = createTheme({
  typography: {
    fontFamily: `"Trebuchet MS", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

export default function App() {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.categories.allCategories);

  useEffect(() => {
    fetchAllCategories({ dispatch });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {/* It will set the theme for the below elements */}
      <CssBaseline />
      {/* It will enable the styling from the baseline */}
      <BrowserRouter>
        <Container maxWidth="lg">
          <Header
            title="Pet Adoption Center"
            sections={[
              ...sections,
              ...allCategories.map((category) => ({
                title: category.name,
                url: `/${category?._id}`,
              })),
            ]}
          />
          <main>
            <SnackBarComponent />
            <Router />
          </main>
        </Container>
        <Footer
          title="Pet Adoption Center"
          description="Every Pet Deserves a Good Home."
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}
