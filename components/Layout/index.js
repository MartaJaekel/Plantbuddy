import Navigation from "../Navigation";
import styled from "styled-components";

export default function Layout({ children, theme }) {
  return (
    <>
      <main>{children}</main>
      <Navigation theme = {theme}/>
    </>
  );
}
