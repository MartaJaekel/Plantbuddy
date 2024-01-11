import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import { plants } from "@/lib/data";
import { uid } from "uid";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "@/components/Theme";
import { categories } from "@/lib/data-categories";

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useLocalStorageState("theme", {
    defaultValue: "light",
  });
  
  function toggleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  const [favorites, setFavorites] = useLocalStorageState("favorites", {
    defaultValue: [],
  });

  const [preferences, setPreferences] = useLocalStorageState("preferences", {
    defaultValue: [],
  });

  function handleToggleFavorite(plantId) {
    if (favorites.includes(plantId)) {
      setFavorites(favorites?.filter((favorite) => favorite !== plantId));
    } else {
      setFavorites([...favorites, plantId]);
    }
  }

  function handleAddPreference(newPreference) {
    setPreferences([...preferences, { id: uid(), ...newPreference }]);
  }

  function handleEditPreference(editedPreference) {
    setPreferences(
      preferences.map((preference) =>
        preference.id === editedPreference.id ? editedPreference : preference
      )
    );
  }

  function handleDeletePreference(id) {
    setPreferences(preferences.filter((preference) => preference.id !== id));
  }

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Layout theme={theme}>
          <GlobalStyle />
          <Component
            {...pageProps}
            onToggleFavorite={handleToggleFavorite}
            favorites={favorites}
            plants={plants}
            categories={categories}
            preferences={preferences}
            handleAddPreference={handleAddPreference}
            handleDeletePreference={handleDeletePreference}
            theme={theme}
            toggleTheme={toggleTheme}
          />
        </Layout>
      </ThemeProvider>
    </>
  );
}
