import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Section = styled.section`
  margin-left: 160px;
  margin-right: 100px;
  margin-bottom: 10px;
  margin-top: 60px;
  div {
    display: block;
    h2 {
      display: block;
      font-size: 1.5em;
      margin-block-start: 0.83em;
      margin-block-end: 0.83em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      span {
        display: block;
        margin-left: 100px;
        width: 500px;
        font-family: Helvetica, Arial, sans-serif !important;
        color: #fff;
        position: absolute;
        font-size: 48px;
        left: 140px;
        top: 320px;
        line-height: 1.125em;
      }
    }
    p {
      display: block;
      font-size: 1.5em;
      margin-block-start: 0.83em;
      margin-block-end: 0.83em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      > span {
        display: block;
        margin-left: 100px;
        width: 275px;
        line-height: 1.125em;
        color: #fff;
        position: absolute;
        font-size: 18px;
        left: 140px;
        top: 500px;
      }
    }

    button {
      display: block;
      margin-left: 100px;
      width: 275px;
      background: rgb(138, 5, 190);
      color: #fff;
      border: 0;
      height: 56px;
      position: absolute;
      font-size: 18px;
      left: 140px;
      top: 600px;

      &:hover {
        background: ${lighten(0.07, "rgb(138, 5, 190)")};
      }
    }
  }
  > img {
    display: block;
    position: absolute;
    margin-left: 665px;
    margin-top: -470px;
  }
`;
