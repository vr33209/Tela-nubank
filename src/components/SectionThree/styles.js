import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  background-color: #fff;
  justify-content: space-between;
  height: 700px;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-top: 286px;
    margin-left: 150px;
    button {
      display: flex;
      align-items: flex-start;
      line-height: 1.125em;
      font-size: 48px;
      width: 392px;
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
    width: unset;
    height: auto;
    margin-top: 100px;
    margin-right: 219px;
  }
`;
