import Navigation from "../Navigation";

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Navigation />
    </>
  );
}
