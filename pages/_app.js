import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import { SWRConfig } from "swr";
import fetcher from "@/utils/fetcher";
import useSWR from 'swr';

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

  const { data: plants, error: plantsError } = useSWR('/api/plants', fetcher);
  const { data: categories, error: categoriesError } = useSWR('/api/categories', fetcher);

  if (plantsError || categoriesError) return <div>Error occurred while fetching data</div>;
  if (!plants || !categories) return <div>Loading...</div>;


  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <Layout>
          <GlobalStyle />
          <Component
            {...pageProps}
            onToggleFavorite={handleToggleFavorite}
            favorites={favorites}
            plants={plants}
            categories={categories}
            preferences={preferences}
            handleAddPreference={handleAddPreference}
            onEditPreference={handleEditPreference}
            handleDeletePreference={handleDeletePreference}
          />
        </Layout>
      </SWRConfig>
    </>
  );
}
