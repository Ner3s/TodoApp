import styled from 'styled-components';

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;

  button{
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(360deg, #ed5050 0%,#ffa247 100% );
    color: #fff;
    border-radius: 0 5px 5px 0;
    border: none;
    border-right: 1px #545454 solid;
    border-bottom: 1px #545454 solid;
    border-top: 1px #545454 solid;

    cursor: pointer;

    transition: all 2s ease-in-out;
  }

  button:hover{ 
    background: linear-gradient(180deg, #ed5050 0%,#ffa247 100% );
  }
`;