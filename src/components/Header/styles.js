import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.div`
  background: #fff;
  box-sizing: border-box;
  height: 80px;
  hr {
    border: 0;
    height: 1px;
    background: #999;
  }
`;

export const Content = styled.div`
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  z-index: 9;
  background-color: rgb(255, 255, 255);
  height: 80px;
  padding-left: 32px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px;

  nav {
    display: flex;
    align-items: center;
    img {
      margin-right: 10px;
      width: 46px;
    }
    label {
      padding: 19px 12px;
      margin-top: 10px;
      a {
        background: transparent;
        color: rgb(118, 118, 118);
        border: 0;
        font-size: 18px;
        font-family: Arial, Helvetica, sans-serif;

        &:hover {
          color: rgb(138, 5, 190);
        }
      }
    }
  }
`;
export const Login = styled.aside`
  display: flex;
  align-items: center;

  label {
    flex: 1;
    margin-right: 15px;
    a {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 18px;
      cursor: pointer;
      text-align: center;
      user-select: none;
      min-height: 80px;
      white-space: nowrap;
      display: inline-flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      background-color: white;
      color: rgb(138, 5, 190);
      -webkit-appearance: none !important;
      border-width: initial;
      border-style: none;
      border-color: initial;
      border-image: initial;
      outline: none;
      margin-right: 19px;
      transition: all 200ms ease-in-out 0s;
    }
  }

  button {
    width: 220px;

    cursor: pointer;
    text-align: center;
    font-size: 18px;
    user-select: none;
    min-height: 80px;
    white-space: nowrap;
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    background-color: rgb(138, 5, 190);
    color: white;
    -webkit-appearance: none !important;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    outline: none;
    padding: 19px 32px;
    transition: all 200ms ease-in-out 0s;
    border-radius: 0px;
    &:hover {
      background: ${lighten(0.07, "rgb(138, 5, 190)")};
    }
  }
`;
