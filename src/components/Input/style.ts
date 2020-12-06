import styled from 'styled-components';

export const ContainerInput = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;

  input {
    width: 100%;
    height: 40px;
    display: flex;
    background-color: #fff;
    border-top: 1px #545454 solid;
    border-bottom: 1px #545454 solid;
    border-left: 1px #545454 solid;
    border-right: none;
    outline: none;
    font-size: 14px;
    padding: 0 10px;
    border-radius: 5px 0 0 5px;
  }
`;