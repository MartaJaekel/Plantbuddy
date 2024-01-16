import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "@/components/Theme";
import { SWRConfig } from "swr";
import fetcher from "@/utils/fetcher";
import useSWR from "swr";

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

  const [entries, setEntries] = useLocalStorageState("entries", {
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

  function handleDeleteEntry(id) {
    setEntries(entries.filter((entry) => entry.id !== id));
    console.log(id)
  }

  const { data: plants, error: plantsError } = useSWR("/api/plants", fetcher);
  const { data: categories, error: categoriesError } = useSWR(
    "/api/categories",
    fetcher
  );

  if (plantsError || categoriesError)
    return <div>Error occurred while fetching data</div>;
  if (!plants || !categories) return <div>Loading...</div>;

  function handleFormSubmit(data) {
    const newEntry = { id: uid(), ...data };
    setEntries((prevFormEntry) => [...prevFormEntry, newEntry]);
  }
  function handleEditEntry(editedEntry) {
    setEntries(
      entries.map((entry) =>
        entry.id === editedEntry.id ? editedEntry : entry
      )
    );
  }

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <SWRConfig value={{ fetcher }}>
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
              onEditPreference={handleEditPreference}
              theme={theme}
              toggleTheme={toggleTheme}
              onFormSubmit={handleFormSubmit}
              entries={entries}
              handleDeleteEntry={handleDeleteEntry}
              onEditEntry={handleEditEntry}
            />
          </Layout>
        </SWRConfig>
      </ThemeProvider>
    </>
  );
}
