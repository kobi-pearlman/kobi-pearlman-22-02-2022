import { ThemeProvider } from "@emotion/react";
import { useSelector } from "react-redux";
import { createTheme } from "@mui/material";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectColorMode } from "./redux/prefernces/preferencesSelectors";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import HomePage from "./pages/HomePage";
import { getCityByCoords, getWeatherData } from "./redux/main/mainActions";
import ErrorMessage from "./components/ui/ErrorMessage";
import { selectShowError } from "./redux/requestsStatus/requestsStatusSelectors";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  const dispatch = useDispatch();
  const colorMode = useSelector(selectColorMode);
  const showError = useSelector(selectShowError);

  const theme = createTheme({
    palette: {
      mode: colorMode,
    },
  });

  useEffect(() => {
    colorMode === "dark"
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [colorMode]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          dispatch(getCityByCoords(lat, lon));
        },
        () => {
          dispatch(getWeatherData("215854", "Tel Aviv"));
        }
      );
    }
  }, [dispatch]);
  return (
    <div className="App">
      <NavBar />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
        {showError && <ErrorMessage />}
      </ThemeProvider>
    </div>
  );
}

export default App;
