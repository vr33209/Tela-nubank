import React from "react";

import hand from "../../assests/holding-card-vertical@0.5x.png";

import { Container } from "./styles";

export default function SectionTwo() {
  return (
    <Container>
      <div>
        <button>Cartão de Crédito</button>
        <span>
          Moderno, simples e gratuito. Tudo para deixar o controle nas suas
          mãos.
        </span>
        <a href="/">Débito: entre na lista de espera</a>
      </div>

      <img src={hand} alt="hand" />
    </Container>
  );
}
