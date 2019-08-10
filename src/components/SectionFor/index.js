import React from "react";

import hand from "../../assests/nuconta-inclined-device@1x.png";

import { Container } from "./styles";

export default function SectionFor() {
  return (
    <Container>
      <div>
        <button>Rewards</button>
        <span>
          Moderno, simples e gratuito. Tudo para deixar o controle nas suas
          mãos.
        </span>
        <a href="/">Saiba mais</a>
      </div>

      <img src={hand} alt="hand" />
    </Container>
  );
}
