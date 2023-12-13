import Layout from "@/components/Layout";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
