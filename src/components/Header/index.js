import React from "react";

import logoHeader from "../../assests/nubank-logo-7.png";
import { Container, Login, Content } from "./styles";

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logoHeader} alt="logo" />
          <label>
            <a href="/">Inicio</a>
          </label>
          <label>
            <a href="/">NuConta</a>
          </label>
          <label>
            <a href="/">Cartão de crédito</a>
          </label>
          <label>
            <a href="/">Rewards</a>
          </label>
          <label>
            <a href="/">Empréstimo</a>
          </label>
          <label>
            <a href="/">Sobre nós</a>
          </label>
          <label>
            <a href="/">Carreiras</a>
          </label>
        </nav>
        <Login>
          <label>
            <a href="/">Login</a>
          </label>

          <button>Quero ser Nubank</button>
        </Login>
      </Content>
      <hr />
    </Container>
  );
}
