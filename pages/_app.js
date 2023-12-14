import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import { plants } from "@/lib/data";

export default function App({ Component, pageProps }) {
  const [favorites, setFavorites] = useLocalStorageState("favorites", {
    defaultValue: [],
  });
  // leerer Array weil standardmäßig keine Pflanzen favorisiert sind

  function handleToggleFavorite(plantId) {
    if (favorites.includes(plantId)) {
      setFavorites(favorites?.filter((favorite) => favorite !== plantId)); // aus Favoriten entfernen
    } else {
      setFavorites([...favorites, plantId]); // zu Favoriten hinzufügen
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
