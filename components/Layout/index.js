import Navigation from "../Navigation";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Navigation />
    </>
  );
}
