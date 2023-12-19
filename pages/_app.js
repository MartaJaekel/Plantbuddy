import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import { plants } from "@/lib/data";

export default function App({ Component, pageProps }) {
  const [favorites, setFavorites] = useLocalStorageState("favorites", {
    defaultValue: [],
  });

  function handleToggleFavorite(plantId) {
    if (favorites.includes(plantId)) {
      setFavorites(favorites?.filter((favorite) => favorite !== plantId));
    } else {
      setFavorites([...favorites, plantId]);
    }
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
        />
      </Layout>
    </>
  );
}
