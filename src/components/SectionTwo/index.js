import React from "react";

import CellPhoneTwo from "../../assests/nuconta-inclined-device@1x.png";

import { Container } from "./styles";

export default function SectionTwo() {
  return (
    <Container>
      <div>
        <button>NuConta</button>
        <span>Rende mais que a poupança e você não paga nada por isso.</span>
        <a href="/">Débito: entre na lista de espera</a>
      </div>

      <img src={CellPhoneTwo} alt="CellPhoneTwo" />
    </Container>
  );
}
