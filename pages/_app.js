import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import { plants } from "@/lib/data";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
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

  function handleDeletePreference(id) {
    setPreferences(preferences.filter((preference) => preference.id !== id));
  }

  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component
          {...pageProps}
          onToggleFavorite={handleToggleFavorite}
          favorites={favorites}
          plants={plants}
          preferences={preferences}
          handleAddPreference={handleAddPreference}
          handleDeletePreference={handleDeletePreference}
        />
      </Layout>
    </>
  );
}
