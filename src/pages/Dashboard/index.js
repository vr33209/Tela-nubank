import React from "react";

import SectionTwo from "../../components/SectionTwo";
import SectionThree from "../../components/SectionThree";
import SectionFor from "../../components/SectionFor";
import Footer from "../../components/Footer";

import Woman from "../../assests/woman-bus@1x.jpg";
import CellPhone from "../../assests/home_products@1x.png";

import { Container, Section } from "./styles";

export default function Dashboard() {
  return (
    <Container>
      <Section>
        <div>
          <img src={Woman} alt="CellPhone" />

          <h2>
            <span>Ser Nubank é ter uma vida financeira descomplicada.</span>
          </h2>

          <p>
            <span>
              NuConta com rendimento acima da poupança e cartão de crédito sem
              anuidade.
            </span>
            <button>Quero ser Nubank</button>
          </p>
        </div>
        <img src={CellPhone} alt="" />
      </Section>
      <SectionTwo />
      <SectionThree />
      <SectionFor />
      <Footer />
    </Container>
  );
}
