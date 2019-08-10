import React from "react";

import LogoFooter from "../../assests/logo.svg";
import { Container } from "./styles";

export default function Footer() {
  return (
    <Container>
      <img src={LogoFooter} alt="LogoFooter" />
    </Container>
  );
}
