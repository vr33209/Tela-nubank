import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  background-color: rgb(245, 245, 245);
  padding: 0px;
  margin-top: 150px;
  div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-right: 169px;
    margin-top: 286px;

    button {
      display: flex;
      align-items: flex-start;
      line-height: 1.125em;
      font-size: 48px;
      width: 275px;
      color: rgb(138, 5, 190);
      border: 0;
      font-size: 48px;
      background: none;
    }

    a {
      line-height: 1.125em;
      font-size: 48px;
      width: 275px;
      color: rgb(138, 5, 190);
      border: 0;
      font-size: 18px;
      margin-top: 50px;
    }
    span {
      width: 400px;
      display: block;
      font-size: 48px;
      color: rgb(118, 118, 118);
    }
  }

  img {
    margin-top: 100px;
    margin-bottom: 100px;
  }
`;
